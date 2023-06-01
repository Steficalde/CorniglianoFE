const Table = ({ children }) => {
  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <table className="min-w-full text-left text-sm font-light">
            {children}
          </table>
        </div>
      </div>
    </div>
  )
}
const TableHead = ({ children }) => (
  <thead className="border-b font-medium dark:border-neutral-500">
    {children}
  </thead>
)

const TableBody = ({ children }) => <tbody>{children}</tbody>

const TableData = ({ children }) => (
  <td className="whitespace-nowrap px-6 py-4">{children}</td>
)
const TableHeader = ({ children }) => (
  <th scope="col" className="px-6 py-4">
    {children}
  </th>
)

Table.Body = TableBody
Table.Head = TableHead
Table.Data = TableData
Table.Header = TableHeader
export default Table
