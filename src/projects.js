import bandz from './images/bandz.png'
import jg from './images/jg.png'
import imgup from './images/imgup.png'
import quick_votes from './images/quick_votes.gif'
const projects=[
    {name:'Quick Votes',
    live:'http://instant-democracy.herokuapp.com/',
    github:'Private Repo',
    description: 'MERN and socket application for creating and recording votes ',
    img:quick_votes
    },
    {name:'ImgUp',
    live: 'https://imgupexample.herokuapp.com/',
    github: 'https://github.com/ChristianH85/IMGUPL',
    description: 'MERN Stack app that uses cloudinary to upload and store images. App is hosted on Heroku (free- tier), so if it fails to load please refresh to view',
    img: imgup},
    {name:'B & Z Renovations',
    live: 'https://bandzrenovations.com/',
    github: 'Private Repo',
    description: 'Client React App that utilizes Gatsby and GraphQl for CMS functionality in a serverless app. Hosted on Netlify',
    img: bandz},
    {name:'JG Wedding',
    live: 'https://herecomethehenrys.com/',
    github: 'Private Repo',
    description: 'Client React app that leverages MongoDB Atlas to store and reference data. Hosted on Netlify',
    img:jg},

]
export default projects
