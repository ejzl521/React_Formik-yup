import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup
    .string('문자여야 합니다!')
    .required('빈값 X'),
  height: Yup
    .number()
    .typeError('숫자만 입력하세요')
    .integer()
    .positive('양수만 입력하세요')
    .required('빈값 X'),
  email: Yup
    .string()
    .email('이메일 양식이 틀렸습니다!')
    .required('빈값 X'),
})
const App = () => (
    <Formik
      initialValues={{
        name: "",
        height: "",
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { resetForm }) => {
        alert(JSON.stringify(data, null, 2));
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <div>
            이름: <Field name="name" />
            <ErrorMessage name="name"/>
          </div>
          <div>
            키: <Field name="height" />
            <ErrorMessage name="height"/>
          </div>
          <div>
            이메일: <Field  name="email" />
            <ErrorMessage  name="email"/>
          </div>
          <button onClick={
            ()=>{
              validationSchema.validate(props.values)
              .then((value)=>alert("감사합니다!"))
              .catch((err)=>alert("올바른 값을 입력하세요!"))
            }
          }
          type="submit">제출하기</button>
        </form>
      )}
    </Formik>

)

export default App;