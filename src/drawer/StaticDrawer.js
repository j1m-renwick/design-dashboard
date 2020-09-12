import React, {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CharacterCounterConfig from "./CharacterCounterConfig";

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

const list = ['Letter Count', 'Golden Ratio'];

export default function StaticDrawer() {
    const classes = useStyles();

    const [selectedItem, setSelectedItem] = useState(null);

    const renderWidgetConfig = () => {
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
                {list.map(text => (
                    <ListItem button key={text} onClick={() => setSelectedItem(text)}>
                        <ListItemIcon>
                            <BubbleChartOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider />
            {renderWidgetConfig()}
        </Drawer>
    );
}