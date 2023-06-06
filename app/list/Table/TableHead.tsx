import { VehicleObj } from "@/types/global";
import { EnhancedTableProps } from "../types/table";
import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from '@mui/utils';

interface HeadCell {
  disablePadding: boolean;
  id: keyof VehicleObj;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'date',
    numeric: false,
    disablePadding: true,
    label: 'Data',
  },
  {
    id: 'vehicle',
    numeric: true,
    disablePadding: false,
    label: 'Samochód',
  },
  {
    id: 'fueled',
    numeric: true,
    disablePadding: false,
    label: 'Zatankowano (l)',
  },
  {
    id: 'traveled',
    numeric: true,
    disablePadding: false,
    label: 'Przejechane (km)',
  },
  {
    id: 'mileage',
    numeric: true,
    disablePadding: false,
    label: 'Przebieg (km)',
  },
  {
    id: 'driver',
    numeric: true,
    disablePadding: false,
    label: 'Kierowca',
  },
];

export function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof VehicleObj) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}