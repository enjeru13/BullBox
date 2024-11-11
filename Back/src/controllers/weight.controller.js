import WeightRecord from "../models/weight.model.js";

// Controlador para agregar un nuevo registro de peso
export const addWeightRecord = async (req, res) => {
  try {
    const {userId, weight} = req.body;
    const newRecord = new WeightRecord({userId, weight});
    await newRecord.save();
    res.status(201).json({message: "Registro guardado con éxito"});
  } catch (error) {
    res.status(500).json({error: "Error al guardar el registro"});
  }
};

// Controlador para obtener los registros de peso de un usuario
export const getUserWeightRecords = async (req, res) => {
  try {
    const {userId} = req.params;
    const records = await WeightRecord.find({userId}).sort({date: -1});
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({error: "Error al obtener los registros"});
  }
};
