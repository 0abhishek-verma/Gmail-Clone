import { useState } from 'react'
import {Dialog,Box,Typography,styled,InputBase,TextField,Button} from '@mui/material'
import {Close, DeleteOutline} from '@mui/icons-material'
import useApi from '../hooks/useApi'
import { API_URLS } from '../services/api.urls'



const dialogStyle ={
    height:'90%',
    width:'80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0px 0px',
    
    }

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding:'10px 15px',
    borderRadius: '10px 10px 0px 0px',
    backgroundColor: '#F2F6FC',
    cursor:'pointer',
    '&>P':{
        fontSize: 14,
        fontWeight: 500,
    }
})
const MailWrapper = styled(Box)({
    display:'flex',
    flexDirection:'column',
    padding: '0px 15px',
    '& > div ':{
        fontSize: 14,
        borderBottom:'1px solid #F5F5F5',
        marginTop:10,
    },
})
const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding:'0px 15px 15px 15px',
    

})
const SendButton = styled(Button)({
    borderRadius: '20px',
    border:'1px solid #0B57D0',
    background:'#0B57D0',
    color:'white',
    fontWeight:500,
    textTransform: 'none',
    width:'100px'
})
const ComposeMail=({openDialog, setOpenDialog})=>{
    const [data,setData]=useState({});
    const sentEmailService = useApi(API_URLS.saveSentEmail);

    const config={
            Host : "smtp.elasticemail.com",
            Username : process.env.REACT_APP_USERNAME,
            Password : process.env.REACT_APP_PASSWORD,
            Port:2525,
    }
    const closeComposeMail=(e)=>{
            e.preventDefault();

            setOpenDialog(false);
    }
    const sendMail=(e)=>{
        e.preventDefault();
       if (window.Email){
        window.Email.send({
            ...config,
            To : data.to,
            From : "av2000546@gmail.com",
            Subject : data.subject,
            Body : data.body
        }).then(
          message => alert(message)
        );
    }

        const payLoad ={
             to:data.to,
             from:'av2000546@gmail.com',
             subject:data.subject,
             body:data.body,
             date: new Date(),
             image:'',
             name:'Abhishek Verma',
             starred:false,
             type:'sent',
        }

        sentEmailService.call(payLoad);
        if(!sentEmailService.error){
            setOpenDialog(false);
            setData({});
        }else{
            
        }

        setOpenDialog(false)
    }
    const onValueChange =(e)=>{
            setData({...data,[e.target.name]:e.target.value})
    }
    return(
        <Dialog
        open={openDialog}
        PaperProps={{sx: dialogStyle}}
        >
        <Header>
            <Typography>New Message</Typography>
            <Close  fontSize='small' onClick={(e)=>closeComposeMail(e)}/>
        </Header>
        <MailWrapper>
        <InputBase placeholder='Recipients:' name='to' onChange={(e)=> onValueChange(e)} />
        <InputBase placeholder='Subject:' name='subject' onChange={(e)=> onValueChange(e)}  />
        </MailWrapper>
        <Box>
            <TextField 
            multiline
            rows={15}
            sx={{'& .MuiOutlinedInput-notchedOutline':  {border:'none'}}}
            onChange={(e)=> onValueChange(e)} 
            name='body'
            />
            </Box>
        <Footer>
            <SendButton onClick={(e)=>sendMail(e)}>Send</SendButton>
        <DeleteOutline fontSize='small' cursor='pointer' onClick={()=>setOpenDialog(false)}/>
        </Footer>
        </Dialog>
    )
}

export default ComposeMail