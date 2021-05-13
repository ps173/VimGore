const express = require("express")
const router = express.Router()
const Snippets = require('../models/snippets')


router.get('/', async (req,res)=>{
    try{
        const allQuestions = await (Snippets.find())
        res.json(allQuestions)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

// TODO : Get a random question
router.get('/random',async (req,res)=>{
    try{
        const allQuestions = await (Snippets.find())
        let len = allQuestions.length
        let pos = Math.floor(Math.random()*len)
        res.json(allQuestions[pos])
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

// Read One
router.get('/:id',getSnippetByID,(req,res)=>{
    res.status(200).json(res.snippet)
})

// Post a question
router.post('/',async (req,res)=>{
    const snippet = new Snippets({
        code : req.body.code, 
        answer : req.body.answer, 
        minKeyStrokes : req.body.minKeyStrokes, 
        language : req.body.language 
    })
    try {
        const newSnippet = await snippet.save()
        res.status(201).json(newSnippet)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

// Update
router.patch('/:id',getSnippetByID,async (req,res)=>{
    if (req.body.code != null){
        res.snippet.code = req.body.code
    }
    if (req.body.answer != null){
        res.snippet.answer = req.body.answer
    }
    if (req.body.minKeyStrokes != null){
        res.snippet.minKeyStrokes = req.body.minKeyStrokes
    }
    if (req.body.language != null){
        res.snippet.language = req.body.language
    }
    try {
        const updatedSnippet = await res.snippet.save()
        res.json(updatedSnippet)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
})

// Delete 
router.delete('/:id',getSnippetByID,async(req,res)=>{
    try{
        await res.snippet.remove()
        res.json({ message:"Deleted Snippet" })
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
})

async function getSnippetByID(req,res,next){
    let snippet;
    try{
        snippet = await Snippets.findById(req.params.id)
        if (snippet == null){
            return res.status(404).json({
                message:"question does not exist"
            })
        }
    } catch (err){
        res.status(401).json({message:err.message})
    }

    res.snippet = snippet
    next()
}

module.exports = router
