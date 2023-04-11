import express from 'express';
const router=express.Router()
router.get('/',(req,res)=>{
    res.send("hi fela hula")
})

export default router