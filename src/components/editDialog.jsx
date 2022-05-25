import {
    TextField, Dialog, Button,
    DialogActions, DialogContent, DialogContentText
} from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { theme } from '../utils/theme';
import { useState } from 'react';

export default function EditDialog({defaults}) {

    const [open, setOpen] = useState(false);
    const [userEdit, setUserEdit] = useState({});

    const handleClickOpen = () => {
        setUserEdit({...defaults});
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleSave = () => {
        console.log("save new data -->", userEdit);
        setOpen(false);
    };

    return <>

        <ThemeProvider theme={theme}>
            <Typography>
                <Button onClick={handleClickOpen} variant="contained" color="primary" size="small">
                    Edit Profile
                </Button>
            

        <Dialog open={open}>
        
            <DialogContent>
                <DialogContentText>Edit profile</DialogContentText>
                <TextField
                    required
                    onChange={(e) => setUserEdit({ ...userEdit, title: e.target.value })}
                    label="Job title"
                    InputLabelProps={{ shrink: true }}
                    defaultValue={userEdit.title}
                    margin="dense"
                    id="job"
                    type="text"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    required
                    onChange={(e) => setUserEdit({ ...userEdit, team: e.target.value })}
                    label="Department"
                    InputLabelProps={{ shrink: true }}
                    defaultValue={userEdit.team}
                    margin="dense"
                    id="department"
                    type="text"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    onChange={(e) => setUserEdit({ ...userEdit, contactInfo: e.target.value })}
                    label="Contact info"
                    InputLabelProps={{ shrink: true }}
                    defaultValue={userEdit.email}
                    margin="dense"
                    id="contactInfo"
                    type="text"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    onChange={(e) => setUserEdit({ ...userEdit, bio: e.target.value })}
                    label="Bio"
                    InputLabelProps={{ shrink: true }}
                    defaultValue={userEdit.bio}
                    margin="dense"
                    id="bio"
                    type="text"
                    fullWidth
                    variant="outlined"
                    multiline
                    minRows={4}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel} variant="text">Cancel</Button>
                <Button onClick={handleSave} variant="contained" color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>

        </Typography>
        </ThemeProvider>
    </>

}
