import "./tableTotalSales.scss";

const TableTotalSales = () => {
  return (
    <>
      <p className="total">$12,875</p>
      <p className="compared">Compared to $21,504 last month</p>

      <table className="table_total_sales">
        <thead>
          <tr>
            <th>Product SUK</th>
            <th>Units</th>
            <th>Sales</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SUK 1232842</td>
            <td>6504</td>
            <td>$2,3046</td>
            <td>
              <a className="triangle-up"></a>
            </td>
          </tr>
          <tr>
            <td>SUK2842</td>
            <td>6507874</td>
            <td>$2,8776</td>
            <td>
              <a className="triangle-down"></a>
            </td>
          </tr>
          <tr>
            <td>SUK 12842</td>
            <td>04</td>
            <td>$2,8776</td>

            <td>
              <a className="triangle-down"></a>
            </td>
          </tr>
          <tr>
            <td>SUK 12842</td>
            <td>04</td>
            <td>$2,8776</td>

            <td>
              <a className="triangle-up"></a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableTotalSales;
