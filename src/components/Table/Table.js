import moment from "moment";
import React from "react";
import Items from "../../db/items.json";
import "./Table.css";

const Table = ({ setData, Data }) => {
  const { collection } = Items;

  const classname = Data ? "hide-column hide-table-data" : "hide-column";
  const classnamePrivate = Data
    ? "isPrivate hide-private"
    : "isPrivate hide-private";

  return (
    <table>
      <thead>
        <tr>
          <th>
            <span>Type#</span>
          </th>
          <th>Summary</th>
          <th className={classnamePrivate}>Private</th>
          <th className={classname}>Status</th>
          <th className={classname}>Service</th>
          <th className={classname}>Author</th>
          <th className={classname}>Created</th>
          <th className={classname}>Updated</th>
        </tr>
      </thead>
      <tbody>
        {collection.items.map((item, index) => {
          const { entity } = item;

          return (
            <tr key={index} onClick={() => setData(entity)}>
              <>
                <td>❔{entity.data.type.prefix}</td>
                <td
                  className="truncate__summary"
                  style={{ whiteSpace: "wrap", width: "300px" }}
                >
                  {entity.data.summary}
                </td>
                <td className={classnamePrivate}>
                  {entity.data.isPrivate === true ? "✔" : "❌"}
                </td>
                <td className={classname}>{entity.data.status.name}</td>
                <td className={classname}>
                  {entity.data.service?.name === null
                    ? "No Value"
                    : entity.data.service?.name}
                </td>
                <td className={classname}>{entity.data.author.name}</td>
                <td className={classname}>
                  {moment(entity.data.createdOn).format("DD/MM/YYYY HH:mm")}
                </td>
                <td className={classname}>
                  {moment(entity.data.updatedOn).format("DD/MM/YYYY HH:mm")}
                </td>
              </>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
