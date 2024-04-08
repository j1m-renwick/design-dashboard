import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import {makeStyles} from "@mui/styles";
import Divider from "@mui/material/Divider";
import CharacterCounterConfig from "./CharacterCounterConfig";
import {useRecoilState} from "recoil/dist";
import {selectedWidget} from "../atoms/DrawerAtoms";

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    }
}));

const list = [
    {
        title: 'Letter Count',
        icon: <AbcOutlinedIcon/>
    },
    {
        title: 'Golden Ratio',
        icon: <BubbleChartOutlinedIcon/>
    },
    {
        title: 'Certificate Verification',
        icon: <FactCheckOutlinedIcon/>
    }
];

export default function StaticDrawer() {
    const classes = useStyles();

    const [selectedItem, setSelectedItem] = useRecoilState(selectedWidget);

    const renderWidgetConfig = () => {
        // TODO reset atoms of non-selected config sections
        if (selectedItem === "Letter Count") {
            return <CharacterCounterConfig/>
        }
        return null;
    }

    return (
        <Drawer
            variant="persistent" anchor="left"
            open={true} classes={{paper: classes.drawerPaper}}>
            <List>
                {list.map(item => (
                    <ListItem button key={item.title} onClick={() => setSelectedItem(item.title)}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title}/>
                    </ListItem>
                ))}
            </List>
            <Divider />
            {renderWidgetConfig()}
        </Drawer>
    );
}
