import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import Search from "./Search";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-700 p-4 flex flex-col'>
			<Search />
			<div className='divider px-1 divider-primary'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;