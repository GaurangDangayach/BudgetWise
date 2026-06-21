import TransactionChart from "../Transactions/TransactionChart";
import Totals from "../Transactions/Totals";
import { getUserInfoFromStorage } from "../../utils/getUserFromStorage";

const Dashboard = () => {
    const user = getUserInfoFromStorage();
    return (
        <>
            <h1 className="text-3xl font-bold text-center my-6">
                Welcome, {user?.username}
            </h1>
            <div className="flex flex-col lg:flex-row gap-6 m-4">
                <Totals />
                <TransactionChart />
            </div>
        </>
    );
};

export default Dashboard;