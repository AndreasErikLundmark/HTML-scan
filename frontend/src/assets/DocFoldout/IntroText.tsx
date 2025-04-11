export default function IntroText(){
    
    return (
        <div className=" text-xs text-blue-950 p-4">
            <ul>
                <li><strong>Endpoint documentation: </strong>Use the <code>GET /links</code> endpoint to retrieve links from a specific webpage based on a search term. Provide the <code>base_url</code> of the webpage and the <code>search_word</code> to find relevant links containing the specified term.</li>
                <br></br>
                <li><strong>Tip:</strong> Leave the <code>search_word</code> empty when calling to get all results from the target. For example, you can first scan for links, and then make another call on those links to scan for paragraphs, helping you gather a broader set of results on the topic.</li>
                <br></br>
                <li><strong>Note:</strong> Scanning shouldn't be used without the approval of [appropriate party or authority].</li>

            </ul>
            <br></br>
            <p className="text-lg">BASE_URL: _ _ _ _ _ _</p>
        </div>
    )
    
}