import Navbar from "../components/Navbar/Navbar";
import TaskDetail from "../components/TaskDetail/TaskDetail";
import Comment from "../components/Comment";
import TaskDetailModal from "../components/TaskDetail/TaskDetailModal";
import ChatInput from "../components/ChatInput/ChatInput";
import { Link } from "react-router-dom";

const TaskPageGame2 = () => {

    return (
        <>
            <Navbar />
            <div className="wrapper container top-gap">
                <div className="row ml-3">
                    <div className="col-md-12">

                        {/* <Link to="/taskdashboard2"><p className="h4">Game Design</p></Link> */}
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link to={"/"}>Dashboard</Link></li>
                                <li class="breadcrumb-item"><Link to={"/taskdashboard2"}>Game Design</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Gameplay Loop Planning</li>
                            </ol>
                        </nav>

                        <p class="h1 mt-4 mb-4">Gameplay Loop Planning</p>
                        <p class="h5">Description</p>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ab.
                            <br />
                            o	Combat System<br />
                            o	Inventory System<br />
                            o	Game Balance

                        </p>
                        <p class="h5">Attachment</p>
                        <div class="card mb-2">
                            <p class="h6 p-5">No file uploaded yet.</p>
                        </div>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>
                        <TaskDetailModal />
                    </div>

                </div>

                <Comment />
            </div>
            <ChatInput />
        </>
    )
}
export default TaskPageGame2;