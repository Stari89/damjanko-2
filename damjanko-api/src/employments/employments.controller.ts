import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { IEmploymentDTO } from './employments.domain';

@Controller('employments')
export class EmploymentsController {
    @Get()
    readAll(): IEmploymentDTO[] {
        return [];
    }

    @Get(':id')
    read(@Param('id') id: string): IEmploymentDTO {
        return {
            employmentId: id,
            position: 'Senior Software Engineer',
            companyName: 'Cosylab d.d.',
            companyAddress: '',
            startDate: new Date('2021-02-11'),
        };
    }

    @Post()
    create(@Body() employmentDto: IEmploymentDTO): IEmploymentDTO {
        employmentDto.employmentId = '12345678';
        return employmentDto;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() employmentDto: IEmploymentDTO) {
        return true;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return true;
    }
}
