import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import { CountContext } from "../../context/CounterContextProvider";

const SettingPage: React.FC = () => {
  const { prices, actions } = useContext(CountContext);

  const [tempValues, setTempValues] = useState<typeof prices>(prices);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTempValues((prev) => ({
      ...prev,
      [event.target.name]: Number(event.target.value) || "",
    }));
  };

  const onClickCancel = () => {
    setTempValues(prices);
  };

  return (
    <>
      <Typography variant="h1" fontSize={25} mt={2}>
        Настройка стоимости материалов и услуг
      </Typography>
      <Stack spacing={2} my={3}>
        <TextField
          onChange={onChange}
          name="cement"
          value={tempValues.cement}
          label="Стоимость цемента, мешок 50кг"
          InputProps={{
            endAdornment: <InputAdornment position="end">руб.</InputAdornment>,
          }}
        />
        <TextField
          onChange={onChange}
          name="sand"
          value={tempValues.sand}
          label="Стоимость песка, мешок 30кг"
          InputProps={{
            endAdornment: <InputAdornment position="end">руб.</InputAdornment>,
          }}
        />
        <TextField
          onChange={onChange}
          name="fibra"
          value={tempValues.fibra}
          label="Стоимость фиброволокна, пакет 600 гр."
          InputProps={{
            endAdornment: <InputAdornment position="end">руб.</InputAdornment>,
          }}
        />
        <TextField
          onChange={onChange}
          name="delivery"
          value={tempValues.delivery}
          label="Стоимость доставки, 120 песок / 12 цемент"
          InputProps={{
            endAdornment: <InputAdornment position="end">руб.</InputAdornment>,
          }}
        />
        <TextField
          onChange={onChange}
          name="porters"
          value={tempValues.porters}
          label="Стоимость подъема стоительных материалов, 1 т."
          InputProps={{
            endAdornment: <InputAdornment position="end">руб.</InputAdornment>,
          }}
        />
        <Typography>
          Стоимость работы можно изменить при расчете на главной странице.
          Стандартная стоимость работ - 450 руб/м<sup>2</sup>
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          onClick={() => actions.changePrices(tempValues)}
        >
          Сохранить
        </Button>
        <Button variant="outlined" color="error" onClick={onClickCancel}>
          Отменить
        </Button>
      </Stack>
    </>
  );
};

export default SettingPage;
