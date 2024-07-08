export default function CourseCard(props){
    return(
        <div id="card-body">
            <div id="card-header">
                <div id="img-container">

                </div>
                <div id="other-container">

                </div>
            </div>
            <div id="card-body">
                <p>{props.data.text}</p>
            </div>
            <div id="card-footer">
                <button>START</button>
            </div>
        </div>
    )
}