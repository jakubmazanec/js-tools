// import {getFieldsetProps, getFormProps, getInputProps, useForm} from '@conform-to/react';
// import {parseWithZod} from '@conform-to/zod';
// import {z} from 'zod';

// const taskSchema = z.object({
//   content: z.string(),
//   completed: z.boolean().optional(),
// });

// const todosSchema = z.object({
//   title: z.string(),
//   tasks: z.array(taskSchema).nonempty(),
// });

// // export async function action({ request }: ActionArgs) {
// //   const formData = await request.formData();
// //   const submission = parseWithZod(formData, {
// //     schema: todosSchema,
// //   });

// //   if (submission.status !== 'success') {
// //     return json(submission.reply());
// //   }

// //   return redirect(`/?value=${JSON.stringify(submission.value)}`);
// // }

// export function Example() {
//   // const lastResult = useActionData<typeof action>();
//   const [form, fields] = useForm({
//     // lastResult,
//     onValidate({formData}) {
//       return parseWithZod(formData, {schema: todosSchema});
//     },
//     shouldValidate: 'onBlur',
//   });
//   const tasks = fields.tasks.getFieldList();

//   return (
//     <form method="post" {...getFormProps(form)}>
//       <div>
//         <label>Title</label>
//         <input
//           className={!fields.title.valid ? 'error' : ''}
//           {...getInputProps(fields.title, {type: 'text'})}
//         />
//         <div>{fields.title.errors}</div>
//       </div>
//       <hr />
//       <div className="form-error">{fields.tasks.errors}</div>
//       {tasks.map((task, index) => {
//         const taskFields = task.getFieldset();

//         return (
//           <fieldset key={task.key} {...getFieldsetProps(task)}>
//             <div>
//               <label>Task #{index + 1}</label>
//               <input
//                 className={!taskFields.content.valid ? 'error' : ''}
//                 {...getInputProps(taskFields.content, {type: 'text'})}
//               />
//               <div>{taskFields.content.errors}</div>
//             </div>
//             <div>
//               <label>
//                 <span>Completed</span>
//                 <input
//                   className={!taskFields.completed.valid ? 'error' : ''}
//                   {...getInputProps(taskFields.completed, {
//                     type: 'checkbox',
//                   })}
//                 />
//               </label>
//             </div>
//             <button
//               {...form.remove.getButtonProps({
//                 name: fields.tasks.name,
//                 index,
//               })}
//             >
//               Delete
//             </button>
//             <button
//               {...form.reorder.getButtonProps({
//                 name: fields.tasks.name,
//                 from: index,
//                 to: 0,
//               })}
//             >
//               Move to top
//             </button>
//             <button
//               {...form.update.getButtonProps({
//                 name: task.name,
//                 value: {content: ''},
//               })}
//             >
//               Clear
//             </button>
//           </fieldset>
//         );
//       })}
//       <button {...form.insert.getButtonProps({name: fields.tasks.name})}>Add task</button>
//       <hr />
//       <button>Save</button>
//     </form>
//   );
// }
import {useForm} from '@conform-to/react';
import {parseWithZod} from '@conform-to/zod';
import {z} from 'zod';

let schema = z.object({
  tasks: z.array(z.string()),
});

export function Example() {
  // const [form, fields] = useForm({
  //   onValidate({formData}) {
  //     return parseWithZod(formData, {schema});
  //   },
  //   onSubmit(event, ...rest) {
  //     event.preventDefault();

  //     console.log('onSubmit!', rest);
  //   },
  // });
  // let handleSubmit = form.onSubmit;
  // const tasks = fields.tasks.getFieldList();

  // console.log('???', {
  //   ...form.remove.getButtonProps({
  //     name: fields.tasks.name,

  //     index: 0,
  //   }),
  // });

  // return (
  //   <form id={form.id} onSubmit={handleSubmit}>
  //     <ul>
  //       {tasks.map((task, index) => (
  //         <li key={task.key}>
  //           <input name={task.name} />

  //           <button
  //             {...form.reorder.getButtonProps({
  //               name: fields.tasks.name,

  //               from: index,

  //               to: 0,
  //             })}
  //           >
  //             Move to top
  //           </button>

  //           <button
  //             {...form.remove.getButtonProps({
  //               name: fields.tasks.name,

  //               index,
  //             })}
  //           >
  //             Delete
  //           </button>
  //         </li>
  //       ))}
  //     </ul>

  //     <button
  //       {...form.insert.getButtonProps({
  //         name: fields.tasks.name,
  //       })}
  //     >
  //       Add task
  //     </button>

  //     <button>Save</button>
  //   </form>
  // );
  const [form, fields] = useForm({
    shouldValidate: 'onBlur',
    onValidate({formData}) {
      return parseWithZod(formData, {schema});
    },
    onSubmit(event, ...rest) {
      event.preventDefault();

      console.log('onSubmit!', rest);
    },
  });

  // let address = fields.address.getFieldset();
  let tasks = fields.tasks.getFieldList();

  let handleSubmit = form.onSubmit;

  return (
    <form method="post" id={form.id} onSubmit={handleSubmit}>
      <div>{form.errors}</div>

      {/*<div>
        <label>Username</label>

        <input type="text" name={fields.name.name} />

        <div>{fields.name.errors}</div>
      </div>

      <div>
        <label>{address.street.name}</label>
        <input name={address.street.name} />
        <div>{address.street.errors}</div>

        <label>{address.zipcode.name}</label>
        <input name={address.zipcode.name} />
        <div>{address.zipcode.errors}</div>

        <label>{address.city.name}</label>
        <input name={address.city.name} />
        <div>{address.city.errors}</div>

        <label>{address.country.name}</label>
        <input name={address.country.name} />
        <div>{address.country.errors}</div>
      </div>*/}

      <ul>
        {tasks.map((task) => (
          <li key={task.key}>
            <label>{task.name}</label>

            <input name={task.name} />

            <div>{task.errors}</div>
          </li>
        ))}
      </ul>

      {/*eslint-disable-next-line react/button-has-type -- needed*/}
      <button
        {...form.insert.getButtonProps({
          name: fields.tasks.name,
        })}
      >
        Add task
      </button>

      {/*eslint-disable-next-line react/button-has-type -- needed*/}
      <button>Send</button>
    </form>
  );
}
