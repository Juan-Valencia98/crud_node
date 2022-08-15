'use strict';
const Employee = require('../models/employee.model');
exports.findAll = function(req, res) {
Employee.findAll(function(err, employee) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', employee);
  res.send(employee);
});
};
exports.create = function(req, res) {
const new_employee = new Employee(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Por favor proporcione todos los campos requeridos' });
}else{
Employee.create(new_employee, function(err, employee) {
  if (err)
  res.send(err);
  res.json({error:false,message:"¡Empleado añadido con éxito!",data:employee});
});
}
};
exports.findById = function(req, res) {
Employee.findById(req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json(employee);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor proporcione todos los campos requeridos' });
  }else{
    Employee.update(req.params.id, new Employee(req.body), function(err, employee) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Empleada actualizada con éxito' });
});
}
};
exports.delete = function(req, res) {
Employee.delete( req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Empleado eliminado con éxito' });
});
};