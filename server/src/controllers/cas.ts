import { Router as expressRouter } from 'express';
import multer from 'multer';
import format from 'date-fns/format';
import { PythonShell } from 'python-shell';
import initialize from '../lib/initialize';

const router = expressRouter()
const storage = multer.diskStorage({
  destination: '/Users/navneet/my-workspace/mfolio/server/data/statements',
  filename: function (_, __, cb) {
    const uniqueSuffix = format(new Date(), 'yyyyMMddHHmmssSSS') // Year Month Day Hour Minute Second Millisecond
    cb(null, 'CAS' + '_' + uniqueSuffix + '.pdf') // CAS_20211014132656673.pdf
  }
})

const multerUpload = multer({ storage }).single('file')

router.post('/', multerUpload, (req, res) => {

  const { password } = req.body
  if(!password) res.status(400).send('Password not provided')
  
  PythonShell.run('/Users/navneet/my-workspace/cas-parser/parse.py', 
    { 
      args: [ req.file?.path as string, password ] 
    }, async function (err, output) {
    if (err) throw err;
    if(!output) throw new Error('No output')
    console.log('finished');
    await initialize(JSON.parse(output[0]))
    res.status(200).send(output ? JSON.parse(output[0]) : {})
  });

})

export default router;