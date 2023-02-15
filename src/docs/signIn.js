// userRouter.post("/signin",signin);
/**
* @swagger
* /api/v1/user/signin:
*  post:
*      summary: "Login on a blog"
*      description: "Needed is  username and password"
*      consumes:
*        - multipart/form-data
*      parameters:
*       - in: formData
*         name: username
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

