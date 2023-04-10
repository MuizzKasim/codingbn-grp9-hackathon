import JobList from "../components/JobList/JobList";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import TaskDashboardModal from "../components/TaskDashboardModal";

const TasksDashboardMarket = () => {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <div className="container">
                    <h1>Marketing Services & Product - Tasks List</h1>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Make a poster for 2025 November sales</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus earum sed, illo tenetur perspiciatis nesciunt nulla, beatae placeat fugit dicta atque libero...</p>
                                    <Link to="/taskdashboard/taskpage/market1" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card bg-light mt-2">
                                <div className="card-body">
                                    <h5 className="card-title">Record a short video for product advertisement</h5>
                                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur rem quae! Libero dolor aliquam soluta dolores reprehenderit maiores possimus delectus ullam consectetur.</p>
                                    <Link to="/taskdashboard/taskpage/market2" className="btn btn-primary">see more</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 m-3">
                            <button type="button" class="btn btn-light border" data-toggle="modal" data-target="#exampleModal">Add</button>
                            <TaskDashboardModal />
                        </div>

                    </div>
                </div >
            </div>
        </>
    )
}
export default TasksDashboardMarket;