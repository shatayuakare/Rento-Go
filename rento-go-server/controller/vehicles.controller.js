import Vehicles from "../model/vehicles.schema.js";

export const createCar = async (req, res) => {
  try {
    const {
      images,
      UID,
      brand,
      model,
      fuel,
      owner,
      number,
      cartype,
      luggage,
      horsepower,
      engine,
      mileage,
      drive,
      stock,
      price,
      seats,
      gearbox,
    } = req.body;

    const createCar = new Vehicles({
      images,
      UID,
      brand,
      model,
      fuel,
      owner,
      number,
      cartype,
      luggage,
      horsepower,
      engine,
      mileage,
      drive,
      stock,
      price,
      seats,
      gearbox,
    });
    await createCar.save();
    res.status(201).json({ message: "New Car Added", createCar });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createBike = async (req, res) => {
  try {
    const {
      images,
      UID,
      brand,
      model,
      fuel,
      owner,
      number,
      engine,
      mileage,
      stock,
      price,
      gearbox,
    } = req.body;

    const createBike = new Vehicles({
      images,
      UID,
      brand,
      model,
      fuel,
      owner,
      number,
      engine,
      mileage,
      stock,
      price,
      gearbox,
    });
    await createBike.save();
    res.status(201).json({ message: "New Bike Added", createBike });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicles.find();
    if (!vehicles)
      return res.status(404).json({ message: "Vehicles not found" });
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicles.findOne({ _id: req.params.id });
    if (!vehicle)
      return res.status(404).json({ message: "Vehicles not found" });

    res.status(200).json(vehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicles.findOneAndDelete({ _id: req.params.id });

    res.status(200).json({ message: "Vehicles deleted", vehicle });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCar = async (req, res) => {
  try {
    const {
      images,
      brand,
      model,
      fuel,
      owner,
      number,
      cartype,
      luggage,
      horsepower,
      engine,
      mileage,
      drive,
      stock,
      price,
      seats,
      gearbox,
    } = req.body;

    const car = await Vehicles.findOneAndUpdate(
      { _id: req.params.id },
      {
        images,
        brand,
        model,
        fuel,
        owner,
        number,
        cartype,
        luggage,
        horsepower,
        engine,
        mileage,
        drive,
        stock,
        price,
        seats,
        gearbox,
      }
    );
    if (!car) return res.status(404).json({ message: "Vehicle not found" });

    res.status(200).json({ message: "Car Changes save", car });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBike = async (req, res) => {
  try {
    const {
      images,
      brand,
      model,
      fuel,
      owner,
      number,
      engine,
      mileage,
      stock,
      price,
      gearbox,
    } = req.bdoy;
    const bike = await Vehicles.findOneAndUpdate(
      { _id: req.params.id },
      {
        images,
        brand,
        model,
        fuel,
        owner,
        number,
        engine,
        mileage,
        stock,
        price,
        gearbox,
      }
    );

    if (!bike) return res.status(404).json({ message: "Vehicle not found" });

    res.status(200).json({ message: "Bike changes save", bike });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const vehicleStatus = async (req, res) => {
  try {
    const vehicle = await Vehicles.findOneAndUpdate(
      { _id: req.params.id },
      { status: req.body.status }
    );
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

    res.status(200).json({ message: `Your vehicles is ${req.body.status}` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
