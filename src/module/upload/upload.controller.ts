import { Controller, Get, Post, UseInterceptors, UploadedFile, Res } from '@nestjs/common'
import { UploadService } from './upload.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { join } from 'path'
import { Response } from 'express'
import { zip } from 'compressing'
import { ApiTags } from '@nestjs/swagger'

@Controller('upload')
@ApiTags('上傳')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    return true
  }

  @Get('export')
  downLoad(@Res() res: Response) {
    const url = join(__dirname, '../../upload/1683269077714-7646734852.jpeg')
    res.download(url)
  }

  @Get('stream')
  async down(@Res() res: Response) {
    const url = join(__dirname, '../../upload/1683269077714-7646734852.jpeg')
    const tarStream = new zip.Stream()
    await tarStream.addEntry(url)
    res.setHeader('Content-Type', 'application/octet-stream')
    res.setHeader('Content-Disposition', 'attachment; filename=haodai')
    tarStream.pipe(res)
  }

}
