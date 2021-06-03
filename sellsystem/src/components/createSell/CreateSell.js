import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  Fade,
  InputAdornment,
  Modal,
  Paper,
  TextField,
} from "@material-ui/core"
import { useFormValue } from "../../utils/customHooks/useFormValue"
import { AccountCircle } from "@material-ui/icons"
import { createSellStyle } from "./createSellStyle"

const CreateSell = ({ onCreateSell, open, toggleModal }) => {
  const [name, changeName] = useFormValue()
  const [total, changeTotal] = useFormValue()
  const [code, changeCode] = useFormValue()
  const [disabled, setDisabled] = useState(false)
  const classes = createSellStyle()

  const saveSell = () => {
    if (name && total && code) {
      onCreateSell(name, total, code)
      toggleModal()
    } else {
      setDisabled(true)
    }
  }
  useEffect(() => {
    setDisabled(false)
  }, [name, total, code])

  useEffect(() => {
    return () => {
      changeName("")
      changeTotal("")
      changeCode("")
    }
  }, [changeCode, changeName, changeTotal])

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={toggleModal}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <div className={classes.title}>Crear una nueva compra</div>
          <Box
            display="flex"
            flexDirection="column"
            p={1}
            m={1}
            bgcolor="background.paper"
          ></Box>
          <Box p={1}>
            <TextField
              className={classes.margin}
              id="input-name"
              label="Nombre de Cliente"
              value={name}
              required
              error={name === "" && disabled}
              onChange={(e) => changeName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box p={1}>
            <TextField
              className={classes.margin}
              id="input-total"
              label="Monto total de la compra"
              value={total}
              required
              type="number"
              error={total === "" && disabled}
              onChange={(e) => changeTotal(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box p={1}>
            <TextField
              className={classes.margin}
              id="input-code"
              label="Codigo de compra"
              value={code}
              required
              onChange={(e) => changeCode(e.target.value)}
              error={code === "" && disabled}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            alignContent="center"
            p={1}
            m={1}
            bgcolor="background.paper"
          >
            <Box p={1} className={classes.cancelButton}>
              <Button onClick={toggleModal} variant="contained" color="secondary">Cancelar</Button>
            </Box>
            <Box p={1}>
              <Button onClick={saveSell} variant="contained" color="primary">Guardar</Button>
            </Box>
          </Box>
        </Paper>
      </Fade>
    </Modal>
  )
}

export default CreateSell
