const ICON_SIZE = 100;

import { FaHandshake } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { GiSuitcase } from "react-icons/gi";


export const ABOUT = {
    "intro": "Welcome to the Future Leaders of Mckelvey Engineering.",
    "description": "We are dedicated to creating meaningful relationships within McKelvey, developing and maintaining a high standard of professional interest among its members, and taking on community service-based projects to give back to the St. Louis community.",
    "pillars": 
    {
        "Fellowship": {
            "explination": '',
            "icon": <FaHandshake size={ICON_SIZE} />
        },
        "Professional Development": {
            "explination": '',
            "icon": <GiSuitcase size={ICON_SIZE} />
        },
        "Community Service": {
            "explination": '',
            "icon": <RiServiceFill size={ICON_SIZE} />
        }
    }
    
}