import Slogan from "../../Components/Slogan"
import Form from "../../Components/Form"
import SubSlogan from "../../Components/Sub-Slogan"

const Body = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-8">
                <Slogan>
                    <SubSlogan/>
                    <div>
                        <button className="btn-primary">
                            Get Quote Now
                        </button>
                        <button className="btn-transparent ml-1">
                            Learn More
                        </button>
                    </div>
                </Slogan>
                </div>
                <div className="col-4">
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default Body