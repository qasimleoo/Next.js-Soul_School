function Block({block}){
    return(
        <div>
           <h2>school</h2>
           <h3>grade:{block.grade}</h3>
           <h3>section:{block.section}</h3>
           <h3>students:{block.students}</h3>
        </div>
    )
}
export default Block;