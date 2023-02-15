/**
 * @swagger
 * /api/v1/blog/blogpost:
 *   post:
 *     summary: Create a new blog post
 *     description: Create a new blog post and upload an image to Cloudinary
 *     content:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *               date:
 *                 type: string
 *               likes:
 *                 type: number
 *               dislikes:
 *                 type: number
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Blog post created successfully
 *         schema:
 *           type: object
 *           properties:
 *             author:
 *               type: string
 *             message:
 *               type: string
 *       500:
 *         description: Internal server error
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 * definitions:
 *   Blog:
 *     type: object
 *     properties:
 *       image:
 *         type: string
 *       title:
 *         type: string
 *       content:
 *         type: string
 *       author:
 *         type: string
 *       date:
 *         type: string
 *       likes:
 *         type: number
 *       dislikes:
 *         type: number
 */
