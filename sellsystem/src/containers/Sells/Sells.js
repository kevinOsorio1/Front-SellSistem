import { Button } from "@material-ui/core"
import React, { useCallback, useMemo, useState } from "react"
import CreateSell from "../../components/createSell/CreateSell"
import Table from "../../components/Table/Table"
import { usePopOver } from "../../utils/customHooks/usePopOver"

/**
 * @Container - conteiner for sells of an store
 */
function Sells() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nombre de Cliente", width: 130 },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      width: 90,
    },
    { field: "code", headerName: "Codigo de Compra", width: 130 },
  ]

  const rows = [
    { id: 1, name: "Martina Aburto", total: 15000, code: "56BS2" },
    { id: 2, name: "Jose Quintanilla", total: 25000, code: "RS4323" },
    { id: 3, name: "Luis Felipe Quezada", total: 22980, code: "BH3212" },
    { id: 4, name: "Luisa Martinez", total: 4690, code: "BM2312" },
    { id: 5, name: "Fernanda Aguayo", total: 12000, code: "QG2341" },
    { id: 6, name: "Kun Aguero", total: 14300, code: "BG2314" },
  ]
  const [data, setData] = useState(rows)
  const [columnsData, setColumsData] = useState(columns)
  const [openPopOver, toggleOpenPopOver] = usePopOver()
  const dataLength = useMemo(() => {
    return data.length
  }, [data])

  const createNewSell = useCallback(
    (name, total, code) => {
      const id = dataLength + 1
      setData((prevState) => [
        ...prevState,
        { id: id, name: name, total: total, code: code },
      ])
    },
    [dataLength]
  )

  return (
    <div>
      <div style={{marginBottom:"10px"}}>
        <Button onClick={toggleOpenPopOver} variant="contained" color="primary">
          crear nuevo producto
        </Button>
        {openPopOver && (
          <CreateSell
            onCreateSell={createNewSell}
            open={openPopOver}
            toggleModal={toggleOpenPopOver}
          />
        )}
      </div>
      <Table rows={data} columns={columnsData} />
    </div>
  )
}

export default Sells
