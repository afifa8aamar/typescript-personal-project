export function validate(schema : any , data : any , flag = false) 
{
  if (flag == false && (schema == 'object' || Array.isArray(schema)) && (data == 'object' || Array.isArray(data)))
  {
    for (var i = 0; i < Object.keys(schema).length ; i++)
    {
      if(Array.isArray(data[Object.keys(data)[i]]))
      {
        for (let i = 0 ; i < data[Object.keys(data)[i]].length ; i++)
        {
          validate (schema[Object.keys(schema)[0]] , data[Object.keys(data)[i]])
        }
      }
      if (typeof data[Object.keys(data)[i]] == 'object')
      {
        validate(schema[Object.keys(schema)[i]] , data[Object.keys(data)[i]])
      }
      if(data.hasOwnProperty(Object.keys(schema)[i]) == 'false' )
      {
        throw new TypeError('Key is not provided')
      }
      if (typeof Object.values(schema)[i] !== 'object' && Object.values(schema)[i] !== typeof data[Object.keys(data)[i]] )
      {
        throw new TypeError(`Type of ${Object.keys(schema)[i]} should be ${schema[Object.keys(schema)[i]]} `)
      }
    }
  }
    else 
    {
      for (var i = 0; i < Object.keys(schema).length ; i++)
    {
      if(Array.isArray(data[Object.keys(data)[i]]))
      {
          for (let i = 0 ; i < data[Object.keys(data)[i]].length ; i++)
              validate (schema[Object.keys(schema)[0]] , data[Object.keys(data)[i]], true)
      }
      if (typeof data[Object.keys(data)[i]] == 'object')
      {
        validate(schema[Object.keys(schema)[i]] , data[Object.keys(data)[i]], true)
      }
      if(!data.hasOwnProperty(Object.keys(schema)[i]))  
      {
       continue;
      }
      if (typeof Object.values(schema)[i] !== 'object' && Object.values(schema)[i] !== typeof data[Object.keys(data)[i]] )
      {
        throw new TypeError(`Type of ${Object.keys(schema)[i]} should be ${schema[Object.keys(schema)[i]]} `)
      }
    }
  }
    return true
}


