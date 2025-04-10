import DocFoldOut from "./assets/DocFoldout/DocFoldOut";
import Navbar from "./assets/Nav/Navbar"

export default function APIdocPage(){
    return (
        <div>
            <Navbar/>
            
            <DocFoldOut info="get_links" title="/links..."/>
            <DocFoldOut info="get_headings" title="/headings..."/>
            <DocFoldOut info="get_paragraphs" title="/paragraphs..."/>
        </div>
    );
}