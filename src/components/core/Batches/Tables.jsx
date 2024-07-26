export default function Tables({ tableHead, tableData }) {
  return (
    <table>
      <thead>
        <tr className={"border rounded-md py-2 px-3"}>
          {tableHead.map((item, index) => {
            return (
              <th
                key={index}
                className={`capitalize ${item == "title" ? "flex-[2]" : "flex-1"} px-2`}
              >
                {item}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => {
          return (
            <tr key={index} className={`border rounded-md`}>
              <td className={``}>{item.title}</td>
              <td className={``}>{item.startDate}</td>
              <td className={``}>{item.endDate}</td>
              <td className={``}>{item.price}</td>
              <td className={`${status === "published" ? "" : ""}`}>
                {item.status}
              </td>
              <td className={``}>{item.days}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
