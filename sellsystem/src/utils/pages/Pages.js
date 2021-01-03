import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AllInboxRoundedIcon from '@material-ui/icons/AllInboxRounded';
import ShowChartRoundedIcon from '@material-ui/icons/ShowChartRounded';
import Inventory from "../../containers/Inventory/Inventory"
import Sells from "../../containers/Sells/Sells"

export const routes = [
  {
    path: "/",
    exact: true,
    text:"Ventas",
    sidebar: () => <div>Sells</div>,
    icon: <AttachMoneyIcon />,
    main: <Sells/>
  },
  {
    path: "/inventory",
    text:"Inventario",
    sidebar: () => <div>Inventory</div>,
    icon: <AllInboxRoundedIcon />,
    main : <Inventory/>
  },
  {
    path: "/statistics",
    text:"Estadisticas",
    sidebar: () => <div>Estadisticas</div>,
    icon: <ShowChartRoundedIcon />,
    main: <div>estadisticas</div>
  }
];