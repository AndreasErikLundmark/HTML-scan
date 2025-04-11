export default function TableFold(){
    return (
        <div className="overflow-x-auto">
  <table className="table text-blue-950">
    {/* head */}
    <thead className="text-blue-950">
      <tr className="border-blue-950">
        {/* <th></th> */}
        <th>Parameter</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody className=" border-none">
      {/* row 1 */}
      <tr className="border-none">
        {/* <th>1</th> */}
        <td>base_url</td>
        <td>string</td>
        <td>The URL of the page you want to scan for specific text</td>
      </tr>
      {/* row 2 */}
      <tr>
        {/* <th>2</th> */}
        <td>search_word</td>
        <td>string</td>
        <td>The word or phrase you want to scan in provided url</td>
      </tr>
      {/* row 3 */}
      {/* <tr> */}
        {/* <th>3</th> */}
        {/* <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr> */}
    </tbody>
  </table>
</div>

    )
}