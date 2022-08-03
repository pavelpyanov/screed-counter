import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CountContext } from "../../context/CounterContextProvider";

export const priceFormat = (price: number) => {
  return new Intl.NumberFormat("ru").format(price) + " руб.";
};

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const { actions, common, values } = useContext(CountContext);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actions.showPrice();
  };
  return (
    <>
      <Typography variant="h1" fontSize={25} mt={2}>
        Расчет количества материалов и стоимости полусухой стяжки пола
      </Typography>
      <form onSubmit={onSubmit}>
        <Stack spacing={2} mt={3}>
          <TextField
            required
            value={values.s}
            onChange={actions.changeS}
            type="number"
            fullWidth
            label={"Площадь"}
            placeholder="10"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  м<sup>2</sup>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            value={values.h}
            onChange={actions.changeH}
            type="number"
            fullWidth
            label={"Слой"}
            placeholder="50"
            InputProps={{
              endAdornment: <InputAdornment position="end">мм</InputAdornment>,
            }}
          />
          <TextField
            value={values.workPrice || ""}
            onChange={actions.setWorkPriceFromTable}
            type="number"
            fullWidth
            label={"Стоимсть работы (без грузчиков)"}
            helperText="Установлена стандартная стоимость."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  руб/м<sup>2</sup>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained">
            Расчитать
          </Button>
          {common.isShowPrice && (
            <>
              <Typography>
                Стоимость стяжки пола: {priceFormat(values.price)}
              </Typography>
              <Typography>
                за м<sup>2</sup> : {priceFormat(values.pricePerMeter)}
              </Typography>
              <Button onClick={() => navigate("details")}>
                Посмотреть детали
              </Button>
            </>
          )}
        </Stack>
      </form>
    </>
  );
};

export default MainPage;
