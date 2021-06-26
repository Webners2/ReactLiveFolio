import ct from "../../Images/ct.jpg";
import et from "../../Images/et.jpg";
import sw from '../../Images/sw.jpg';
import tdl from '../../Images/tdl.jpg';
import lp from '../../Images/lp.jpg';
import olx from '../../Images/olx.jpg';
import swp from '../../Images/swp.jpg';

const INITIAL_STATE = [
    {
        title : "COVID-19 TRACKER",
        detail : "A mobile friendly Tracker with a Dark Theme. Technology Stacks : React , MaterialUI , ChartJs.",
        link : "https://covidtracker-hm.surge.sh/",
        image : ct
    },
    {
        title : "EXPENSE TRACKER",
        detail : "Another Fully Responsive Tracker to keep up with your wallet :). Technology Stacks : React.",
        link : "https:/expensetracker-hm.surge.sh/",
        image : et
    },
    {
        title : "TODO LIST",
        detail : "A Responsive TODOLIST with a Minimal Design, used HTML CSS JAVASCRIPT & BOOTSTRAP4.",
        link : "https://todolist-bf018.web.app/",
        image : tdl
    },
    {
        title : "LANDING PAGE",
        detail : "An Aesthetic looking Landing Page with HTML SCSS.",
        link : "http://carcare-landingpage-hm.surge.sh/",
        image : lp
    },
    {
        title : "STOP WATCH",
        detail : "A Responsive STOPWATCH with HTML, CSS & JAVASCRIPT & little bit of BOOTSTRAP4.",
        link : "https://stopwatch-4a45c.web.app/",
        image : sw
    },
    {
        title : "OLX CLONE",
        detail : "An ECOM Wesite clone with Backend integration and Authentication using REACTJS",
        link : "https://olx-clone-b52b1.web.app/",
        image : olx
    },
    {
        title : "CHARITY WEBPAGE",
        detail : "A simple clone of a CHARITY Website with HTML CSS JAVASCRIPT & BOOTSTRAP4.",
        link : "https://webpage-4bc34.web.app/",
        image : swp
    },
];
function reducer(state = INITIAL_STATE){
    return state
}
export default reducer;
