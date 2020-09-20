const express = require("express");
const holder = require("../models/holder.model");



module.exports = {
    index: (req, res) => {
        holder.find()
            .then(data => res.json({results:data }))
            .catch(err => res.json(err.errors))
    },
    create: (req, res) => {
        holder.create(req.body)
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },
    showOne: (req, res) => {
        holder.findOne()
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },
    updateOne: (req, res) => {
        holder.findOneAndUpdate({_id:req.params.id},req.body, {runValidators:true, new:true,useFindAndModify:false})
            .then(data => res.json({results: data}))
            .catch(err => res.json(err.errors))
    },
    destroy: (req, res) => {
        holder.deleteOne()
            .then(data => res.json({ results: data }))
            .catch(err => res.json(err.errors))
    },
}