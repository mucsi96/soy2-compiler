function transform (data) {

    data = '/*----------------------------------------------------------------------------------------------------------------------------------------------------------+\n' +
           '|                                                      This file was generated automatically                                                                |\n' +
           '|                                                             Don`t modify it manually!                                                                     |\n' +
           '+----------------------------------------------------------------------------------------------------------------------------------------------------------*/\n' +
        data;

    return data;
}


module.exports.transform = transform;