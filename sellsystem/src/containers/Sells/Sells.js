import React, { useCallback, useMemo, useState } from "react";
import CreateSell from "../../components/createSell/CreateSell";
import Table from "../../components/Table/Table";
import { sellsColumns, sellsRows } from "./SellData";

/**
 * @Container - conteiner for sells of an store
 */
function Sells() {
 
  const [data, setData] = useState(sellsRows);
  const [columnsData, setColumsData] = useState(sellsColumns);
  const dataLength = useMemo(() => {
    return data.length;
  }, [data]);

  const createNewSell = useCallback(
    (name, total, code) => {
      const id = dataLength + 1;
      setData((prevState) => [
        { id: id, name: name, total: total, code: code },
        ...prevState,
      ]);
    },
    [dataLength]
  );
  console.log(data);
  return (
    <div>
      <CreateSell
        onCreateSell={createNewSell}
      />
      <Table rows={data} columns={columnsData} />
    </div>
  );
}

export default Sells;
