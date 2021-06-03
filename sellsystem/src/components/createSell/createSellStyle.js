import { makeStyles } from "@material-ui/core"

export const createSellStyle = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  cancelButton: {
    marginRight: theme.spacing(2),
  },
  title:{
    marginLeft:theme.spacing(2)
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))
