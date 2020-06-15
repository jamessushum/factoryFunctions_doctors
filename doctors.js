const createDocProfile = (name, specialty, address) => {
  return {
    doctorName: name,
    specialty: specialty,
    address: address
  }
}

const doctorMike = createDocProfile("Mike", "Intensive Care Unit", "123 Vanderbilt")
console.log(doctorMike)

const doctorMary = createDocProfile("Mary", "Pediatrics", "123 Vanderbilt")
console.log(doctorMary)