// userRouter.post("/signup",signUp);
/**
* @swagger
* /api/v1/user/signup:
*  post:
*      summary: "Creates an account for  blog"
*      description: "Needed is  username, your email ,Role and password"
*      consumes:
*        - multipart/form-data
*      parameters:
*       - in: formData
*         name: username
*         type: string
*         required: true
*       - in: formData
*         name: email
*         type: string
*         required: true
*       - in: formData
*         name: role
*         type: string
*         required: true
*       - in: formData
*         name: password
*         type: string
*         required: true
*
*      responses:

*       "201":
*         description: "Account created"
*       "200":
*         description: Success
*       "403":
*         description: "Account creation failed"
*
 */

