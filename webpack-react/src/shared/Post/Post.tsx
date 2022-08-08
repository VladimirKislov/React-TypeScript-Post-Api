import React, { useEffect, useRef } from 'react';
import styles from './post.scss';
import ReactDOM from 'react-dom';
import { CommentForm } from '../CommentForm';
import { CommentUsers } from '../CommentUsers';
import { useHistory } from 'react-router-dom';

interface IPropsPost {
  onClose?: () => void,
  data: Array<any>,
  title?: string,
  image?: any,
}

export function Post({ onClose, data, title, image }: IPropsPost) {
  const ref = useRef<HTMLDivElement>(null)
  const history = useHistory()
  
  useEffect(() => {
    function handelClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        // onClose?.()
        history.push('/posts');
      }
    }

    document.addEventListener('click', handelClick)
    return () => {
      document.removeEventListener('click', handelClick)
    }
  }, [])

  const node = document.querySelector('#modal');
  if (!node) return null

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2 className={styles.title}>{ title || 'Следует отметить, что новая модель организационной деятельности поможет' }</h2>

      <div className={styles.content}>
          { image 
            ? <img className={styles.image} src={(image === undefined || (!image.endsWith('.jpg') && !image.endsWith('.jpeg') && !image.endsWith('.gif') && !image.endsWith('.png'))) ? "https://cdn.dribbble.com/userupload/2774008/file/original-315f5378ea4ec89bb81d1ac6c6a4d26e.jpg?filters:format(webp)?filters%3Aformat%28webp%29=&compress=1&resize=1600x1600" : `${image}` } alt="image" /> 
            : <div>
                <p>
                  Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
                </p>
                <p>
                  Безусловно, глубокий уровень погружения создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы массового участия. Внезапно, сделанные на базе интернет-аналитики выводы освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, описаны максимально подробно.
                </p>
                <p>
                  Разнообразный и богатый опыт говорит нам, что выбранный нами инновационный путь обеспечивает широкому кругу (специалистов) участие в формировании новых принципов формирования материально-технической и кадровой базы. Также как существующая теория в значительной степени обусловливает важность благоприятных перспектив. Для современного мира консультация с широким активом однозначно определяет каждого участника как способного принимать собственные решения касаемо приоритизации разума над эмоциями!
                </p>
            </div>
          }
          
      </div>

      <CommentForm />
      {data[0].length > 0
        ? <CommentUsers data={data} />
        : <></>
      }
      

    </div>), node
  );
}
