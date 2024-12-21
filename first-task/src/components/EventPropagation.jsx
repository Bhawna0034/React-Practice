const EventPropagation = () => {
    const handleGrandParent = () => {
        console.log("handleGrandParent Clicked");
    }

    const handleParent = () => {
        console.log("handleParent Clicked");
    }

    const handleChildClick = (event) => {
        console.log("handleChildClick");
        event.stopPropagation();
    }
    return(
        <>
        <section className="main-div">
            <div className="bg-pink-400 w-56 h-56" onClickCapture={handleGrandParent}>
                <div className=" bg-teal-200" onClickCapture={handleParent}>
                    <button className="bg-purple-300" onClickCapture={handleChildClick}>Child Div</button>
                </div>
            </div>
        </section>
        </>
    )
}
export default EventPropagation;