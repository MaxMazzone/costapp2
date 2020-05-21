import React from "react"
import { useFormik } from "formik"

function SplitForm() {
  const formik = useFormik({
    initialValues: {
      costOfBottle: 0,
      sizeOfBottle: 0,
      amountUsed: 0,
      units: "OZ",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="cost-of-bottle">Cost of Bottle</label>
        <input
          id="costOfBottle"
          name="costOfBottle"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.costOfBottle}
        />
        <select
          id="units"
          name="units"
          type="select"
          onBlur={formik.handleChange}
          value={formik.values.unit}
        >
          <option value="OZ">OZ</option>
          <option value="ML">ML</option>
        </select>

        <label htmlFor="size-of-bottle">Size of Bottle</label>
        <input
          id="sizeOfBottle"
          name="sizeOfBottle"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.sizeOfBottle}
        />
        <label htmlFor="amount-used">Amount Used</label>
        <input
          id="amountUsed"
          name="amountUsed"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.amountUsed}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SplitForm
