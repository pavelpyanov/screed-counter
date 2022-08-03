import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { CountContext } from "../../context/CounterContextProvider";
import { priceFormat } from "../MainPage";

const Details: React.FC = () => {
  const { values, prices } = useContext(CountContext);
  return (
    <>
      <Typography variant="h1" fontSize={25} my={2}>
        Делали расчета
      </Typography>
      <Typography>
        Площадь: {values.s}м<sup>2</sup>
      </Typography>
      <Typography>Слой: {values.h}мм.</Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Услуга</TableCell>
            <TableCell>кол-во</TableCell>
            <TableCell>Цена</TableCell>
            <TableCell>Итого</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Песок</TableCell>
            <TableCell>{values.sand}шт.</TableCell>
            <TableCell>{priceFormat(prices.sand)}</TableCell>
            <TableCell>{priceFormat(values.sandCost)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Цемент</TableCell>
            <TableCell>{values.cement}шт.</TableCell>
            <TableCell>{priceFormat(prices.cement)}</TableCell>
            <TableCell>{priceFormat(values.cementCost)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Фиброволокно</TableCell>
            <TableCell>{values.fibra}шт.</TableCell>
            <TableCell>{priceFormat(prices.fibra)}</TableCell>
            <TableCell>{priceFormat(values.fibraCost)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Доставка</TableCell>
            <TableCell>{values.deliveryCount}шт.</TableCell>
            <TableCell>{priceFormat(prices.delivery)}</TableCell>
            <TableCell>{priceFormat(values.delivery)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Грузчики</TableCell>
            <TableCell>{values.massa}т.</TableCell>
            <TableCell>{priceFormat(prices.porters)}</TableCell>
            <TableCell>{priceFormat(values.porters)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Работа</TableCell>
            <TableCell>
              {values.s}м<sup>2</sup>
            </TableCell>
            <TableCell>{priceFormat(values.workPrice)}</TableCell>
            <TableCell>
              {priceFormat(values.workPrice * Number(values.s))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell>Итого</TableCell>
            <TableCell>{priceFormat(values.price)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <TableCell>
              за м<sup>2</sup>
            </TableCell>
            <TableCell>{priceFormat(values.pricePerMeter)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Details;
