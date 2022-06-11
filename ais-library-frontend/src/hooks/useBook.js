import { useCallback, useState } from 'react';
import {
  ApiBookDelete,
  ApiBookListRecient,
  ApiBookSave,
  ApiBookUpdate,
  ApiImageBookSave,
  ApiImageBookUpdate,
} from '../services/booksService';

const useBook = () => {
  const [listBooksStatus, setlistBooksStatus] = useState({
    loading: false,
    page: 0,
    pages: 0,
    content: [],
    message: '',
    error: false,
    success: false,
  });

  const [stateBooks, setStateBooks] = useState({
    loadingSave: false,
    loadignUpdate: false,
    loadingDelete: false,
    success: false,
    error: false,
    message: '',
  });

  const booksRecent = useCallback(async ({ page }) => {
    setlistBooksStatus({
      loading: true,
    });
    await ApiBookListRecient({ page })
      .then((resp) => {
        const { status, page, pages, contentPage, message } = resp;
        if (status === 200) {
          setlistBooksStatus({
            loading: false,
            page: page,
            pages: pages,
            content: contentPage,
            error: false,
            success: true,
          });
        } else {
          setlistBooksStatus({
            loading: false,
            page: page,
            pages: pages,
            content: contentPage,
            message: message,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setlistBooksStatus({
          loading: false,
          page: 0,
          pages: 0,
          content: [],
          message: 'No podemos establecer comunicación con el servidor.',
          error: true,
        });
      });
  }, []);

  const save = useCallback(({ data }) => {
    setStateBooks({
      loadingSave: true,
    });

    ApiBookSave({ data })
      .then((resp) => {
        const { status, message } = resp;
        if (status === 200) {
          setStateBooks({
            loadingSave: false,
            message: message,
            success: true,
          });
        } else if (status === 400) {
          setStateBooks({
            loadingSave: false,
            message: message,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setStateBooks({
          loadingSave: false,
          error: true,
          message:
            'No podemos establecer comunicación con el servidor, inténtelo de nuevo.',
        });
      });
  }, []);

  const update = useCallback(({ data }) => {
    setStateBooks({
      loadingSave: false,
      loadingDelete: false,
      loadignUpdate: true,
    });

    ApiBookUpdate({ data })
      .then((resp) => {
        const { status, message } = resp;
        if (status === 200) {
          setStateBooks({
            loadingSave: false,
            loadingDelete: false,
            loadignUpdate: false,
            message: message,
            success: true,
          });
        } else if (status === 400) {
          setStateBooks({
            loadingSave: false,
            loadingDelete: false,
            loadignUpdate: false,
            message: message,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setStateBooks({
          loadingSave: false,
          loadingDelete: false,
          loadignUpdate: false,
          error: true,
          message:
            'No podemos establecer comunicación con el servidor, inténtelo de nuevo.',
        });
      });
  }, []);

  const delet = useCallback(({ id }) => {
    setStateBooks({
      loadingDelete: true,
    });

    ApiBookDelete({ id })
      .then((resp) => {
        const { status, message } = resp;
        if (status === 200) {
          setStateBooks({
            loadingDelete: false,
            message: message,
            success: true,
          });
        } else if (status === 400) {
          setStateBooks({
            loadingDelete: false,
            message: message,
            error: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setStateBooks({
          loadingDelete: false,
          error: true,
          message:
            'No podemos establecer comunicación con el servidor, inténtelo de nuevo.',
        });
      });
  }, []);

  const saveImage = useCallback(
    (image, data) => {
      setStateBooks({
        loadingSave: true,
      });

      if (image) {
        ApiImageBookSave(image)
          .then((resp) => {
            const { status, message, image } = resp;
            if (status === 200) {
              return image;
            } else if (status === 400) {
              setStateBooks({
                loadingDelete: false,
                message: message,
                error: true,
              });
            }
          })
          .then((image) => {
            if (image) save({ data: { ...data, image: image } });
          })
          .catch((err) => {
            console.error(err);
            setStateBooks({
              loadingDelete: false,
              error: true,
              message:
                'No podemos establecer comunicación con el servidor, inténtelo de nuevo.',
            });
          });
      } else {
        save({ data });
      }
    },
    [save]
  );
  const updateImage = useCallback(
    (img, data) => {
      const { image } = data;
      const { id } = image;
      setStateBooks({
        loadignUpdate: true,
      });

      if (img) {
        if (id === 1) {
          ApiImageBookSave(img)
            .then((resp) => {
              const { status, message, image } = resp;
              if (status === 200) {
                return image;
              } else if (status === 400) {
                setStateBooks({
                  loadingDelete: false,
                  message: message,
                  error: true,
                });
              }
            })
            .then((image) => {
              if (image) update({ data: { ...data, image: image } });
            })
            .catch((err) => {
              console.error(err);
              setStateBooks({
                loadingDelete: false,
                error: true,
                message:
                  'No podemos establecer comunicación con el servidor, inténtelo de nuevo.',
              });
            });
        } else {
          ApiImageBookUpdate(id, img)
            .then((resp) => {
              const { status, message, image } = resp;
              if (status === 200) {
                return image;
              } else if (status === 400) {
                setStateBooks({
                  loadingDelete: false,
                  message: message,
                  error: true,
                });
              }
            })
            .then((image) => {
              if (image) update({ data: { ...data, image: image } });
            })
            .catch((err) => {
              console.error(err);
              setStateBooks({
                loadingDelete: false,
                error: true,
                message:
                  'No podemos establecer comunicación con el servidor, inténtelo de nuevo.',
              });
            });
        }
      } else {
        update({ data });
      }
    },
    [update]
  );

  return {
    booksRecent,
    listBooksStatus,
    save,
    update,
    delet,
    stateBooks,
    saveImage,
    updateImage,
  };
};

export default useBook;
