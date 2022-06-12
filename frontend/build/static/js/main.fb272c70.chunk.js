(this['webpackJsonpinventory-manager'] =
  this['webpackJsonpinventory-manager'] || []).push([
  [0],
  {
    127: function (e, t, a) {},
    229: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(1),
        r = a.n(n),
        s = a(43),
        c = a.n(s),
        i = (a(98), a(99), a(100), a(11)),
        o = a(12),
        u = a(0);
      function l() {
        return Object(u.jsx)('nav', {
          className: 'navbar navbar-expand-md navbar-dark bg-success',
          children: Object(u.jsxs)('div', {
            className: 'container-fluid',
            children: [
              Object(u.jsx)(i.b, {
                className: 'navbar-brand',
                to: '/',
                children: 'Inventory Manager',
              }),
              Object(u.jsx)('button', {
                className: 'navbar-toggler',
                type: 'button',
                'data-bs-toggle': 'collapse',
                'data-bs-target': '#navbarContent',
                'aria-controls': 'navbarContent',
                'aria-expanded': 'false',
                'aria-label': 'Toggle navigation',
                children: Object(u.jsx)('span', {
                  className: 'navbar-toggler-icon',
                }),
              }),
              Object(u.jsx)('div', {
                className: 'collapse navbar-collapse',
                id: 'navbarContent',
                children: Object(u.jsxs)('ul', {
                  className: 'nav nav-pills',
                  children: [
                    Object(u.jsx)('li', {
                      className: 'nav-item',
                      children: Object(u.jsx)(i.c, {
                        exact: !0,
                        to: '/',
                        className: 'nav-link text-white',
                        children: 'Home',
                      }),
                    }),
                    Object(u.jsx)('li', {
                      className: 'nav-item',
                      children: Object(u.jsx)(i.c, {
                        to: '/categories',
                        className: 'nav-link text-white',
                        children: 'Categories',
                      }),
                    }),
                    Object(u.jsx)('li', {
                      className: 'nav-item',
                      children: Object(u.jsx)(i.c, {
                        to: '/products',
                        className: 'nav-link text-white',
                        children: 'Products',
                      }),
                    }),
                    Object(u.jsx)('li', {
                      className: 'nav-item',
                      children: Object(u.jsx)(i.c, {
                        to: '/purchases',
                        className: 'nav-link text-white',
                        children: 'Purchases',
                      }),
                    }),
                    Object(u.jsx)('li', {
                      className: 'nav-item',
                      children: Object(u.jsx)(i.c, {
                        to: '/sales',
                        className: 'nav-link text-white',
                        children: 'Sales',
                      }),
                    }),
                    Object(u.jsx)('li', {
                      className: 'nav-item',
                      children: Object(u.jsx)(i.c, {
                        to: '/suppliers',
                        className: 'nav-link text-white',
                        children: 'Suppliers',
                      }),
                    }),
                    Object(u.jsx)('li', {
                      className: 'nav-item',
                      children: Object(u.jsx)(i.c, {
                        to: '/transfers',
                        className: 'nav-link text-white',
                        children: 'Transfers',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var d = a(2),
        b =
          (a(127),
          function () {
            var e = Object(n.useState)(!1),
              t = Object(d.a)(e, 2),
              a = t[0],
              r = t[1];
            Object(n.useEffect)(function () {
              window.addEventListener('scroll', function () {
                window.pageYOffset > 300 ? r(!0) : r(!1);
              });
            }, []);
            return Object(u.jsx)(u.Fragment, {
              children:
                a &&
                Object(u.jsx)('button', {
                  onClick: function () {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  },
                  className: 'btn btn-primary border-0 rounded-circle',
                  id: 'scroll-to-top-btn',
                  children: Object(u.jsx)('i', { className: 'arrow up' }),
                }),
            });
          }),
        p = function () {
          return Object(u.jsx)('footer', {
            className: 'mt-2 py-3 bg-light',
            children: Object(u.jsx)('div', {
              className: 'container-fluid',
              children: Object(u.jsxs)('span', {
                children: [
                  'Developed by ',
                  Object(u.jsx)('a', {
                    href: 'https://github.com/martin-nderitu',
                    children: 'Martin Nderitu',
                  }),
                ],
              }),
            }),
          });
        },
        m = function () {
          return Object(u.jsxs)('div', {
            className: 'container-fluid pt-3',
            children: [
              Object(u.jsx)('div', {
                className: 'card border-0 rounded-0 text-white bg-success',
                children: Object(u.jsxs)('div', {
                  className: 'card-body',
                  children: [
                    Object(u.jsx)('h2', {
                      className: 'card-title',
                      children: 'React Redux Inventory Manager',
                    }),
                    Object(u.jsx)('p', {
                      className: 'card-text',
                      children: 'Manage your inventory conveniently',
                    }),
                  ],
                }),
              }),
              Object(u.jsx)('div', {
                className: 'card border-0 rounded-0 text-white bg-success',
                children: Object(u.jsx)('div', {
                  className: 'card-body',
                  children: Object(u.jsx)('h3', {
                    className: 'card-title',
                    children: 'Features',
                  }),
                }),
              }),
              Object(u.jsxs)('div', {
                className: 'card-group',
                children: [
                  Object(u.jsx)('div', {
                    className: 'card border-0 rounded-0 text-white bg-success',
                    children: Object(u.jsxs)('div', {
                      className: 'card-body',
                      children: [
                        Object(u.jsx)('h5', {
                          className: 'card-title',
                          children: 'Manage products, categories & transfers',
                        }),
                        Object(u.jsx)('p', {
                          className: 'card-text',
                          children:
                            'Create, read, update and delete products, product categories and product transfers',
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsx)('div', {
                    className: 'card border-0 rounded-0 text-white bg-success',
                    children: Object(u.jsxs)('div', {
                      className: 'card-body',
                      children: [
                        Object(u.jsx)('h5', {
                          className: 'card-title',
                          children: 'Manage purchases & suppliers',
                        }),
                        Object(u.jsx)('p', {
                          className: 'card-text',
                          children:
                            'Create, read, update and delete purchases and suppliers',
                        }),
                        Object(u.jsx)('p', {
                          className: 'card-text',
                          children:
                            'Purchases module is used to add stock to the system',
                        }),
                      ],
                    }),
                  }),
                  Object(u.jsx)('div', {
                    className: 'card border-0 rounded-0 text-white bg-success',
                    children: Object(u.jsxs)('div', {
                      className: 'card-body',
                      children: [
                        Object(u.jsx)('h5', {
                          className: 'card-title',
                          children: 'Manage sales',
                        }),
                        Object(u.jsx)('p', {
                          className: 'card-text',
                          children:
                            'Create, read, update and delete product sales',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        j = a(3),
        v = a.n(j),
        h = a(5),
        g = a(10),
        O = a(61),
        f = Object(O.createApi)({
          reducerPath: 'api',
          baseQuery: Object(O.fetchBaseQuery)({
            baseUrl: ''.concat(
              Object({
                NODE_ENV: 'production',
                PUBLIC_URL: '',
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }).BASE_URL || 'http://amanahtoko.local:5000/api/v1'
            ),
          }),
          tagTypes: [
            'Category',
            'Product',
            'Purchase',
            'Sale',
            'Supplier',
            'Transfer',
          ],
          endpoints: function () {
            return {};
          },
        }),
        x = f.injectEndpoints({
          endpoints: function (e) {
            return {
              getCategories: e.query({
                query: function (e) {
                  return {
                    url:
                      e && e.length ? '/categories'.concat(e) : '/categories',
                    validateStatus: function (e, t) {
                      return (
                        !!(null === t || void 0 === t ? void 0 : t.error) ||
                        e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return (null === e || void 0 === e ? void 0 : e.categories)
                    ? ['Category'].concat(
                        Object(g.a)(
                          e.categories.map(function (e) {
                            return { type: 'Category', id: e.id };
                          })
                        )
                      )
                    : ['Category'];
                },
              }),
              getCategory: e.query({
                query: function (e) {
                  return {
                    url: '/categories/'.concat(e),
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return [{ type: 'Category', id: a }];
                },
              }),
              addNewCategory: e.mutation({
                query: function (e) {
                  return {
                    url: '/categories',
                    method: 'POST',
                    body: e,
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Category'],
              }),
              editCategory: e.mutation({
                query: function (e) {
                  return {
                    url: '/categories',
                    method: 'PATCH',
                    body: e,
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: function (e, t, a) {
                  return [{ type: 'Category', id: a.id }];
                },
              }),
              destroyCategory: e.mutation({
                query: function (e) {
                  return {
                    url: '/categories/'.concat(e),
                    method: 'DELETE',
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Category'],
              }),
            };
          },
        }),
        y = x.useGetCategoriesQuery,
        S = x.useGetCategoryQuery,
        k = x.useAddNewCategoryMutation,
        N = x.useEditCategoryMutation,
        w = x.useDestroyCategoryMutation,
        q = a(6),
        P = a(18);
      function E(e) {
        return (
          void 0 === e ||
          null === e ||
          ('object' === typeof e && 0 === Object.keys(e).length) ||
          ('string' === typeof e && 0 === e.trim().length)
        );
      }
      function C(e) {
        var t = e.cols,
          a = e.data,
          r = e.checked,
          s = e.setChecked,
          c = e.selection,
          o = Object(n.useState)(function () {
            return c
              ? a.map(function (e) {
                  return e.id;
                })
              : [];
          }),
          l = Object(d.a)(o, 1)[0],
          b = Object(n.useRef)(null);
        Object(n.useEffect)(
          function () {
            var e = Object.keys(r).filter(function (e) {
              return r[e];
            });
            null !== b.current &&
              (b.current.indeterminate = e.length > 0 && e.length !== l.length);
          },
          [l.length, r]
        );
        var p = function (e) {
            var t = e.target,
              a = {};
            if ('0' === t.id) {
              var n,
                c = Object(P.a)(l);
              try {
                for (c.s(); !(n = c.n()).done; ) {
                  a[n.value] = t.checked;
                }
              } catch (i) {
                c.e(i);
              } finally {
                c.f();
              }
            } else a[t.id] = t.checked;
            s(Object(q.a)(Object(q.a)({}, r), a));
          },
          m = function (e) {
            if (E(r)) return !1;
            if (0 === e) {
              var t,
                a = Object(P.a)(l);
              try {
                for (a.s(); !(t = a.n()).done; ) {
                  var n = t.value;
                  if (!r[n]) return !1;
                }
              } catch (s) {
                a.e(s);
              } finally {
                a.f();
              }
              return !0;
            }
            return !!r[e];
          },
          j = function (e) {
            return t.map(function (t) {
              var a,
                n = '';
              if (
                ((n = t.callback ? t.callback(e[t.accessor]) : e[t.accessor]),
                t.link)
              ) {
                var r = t.link.split(':'),
                  s = Object(d.a)(r, 2),
                  c = s[0],
                  o = s[1];
                a = Object(u.jsx)(i.b, {
                  to: ''.concat(c).concat(e[o]),
                  children: n,
                });
              } else a = Object(u.jsxs)(u.Fragment, { children: [' ', n, ' '] });
              return Object(u.jsx)(
                'td',
                { className: 'text-left', children: a },
                ''.concat(t.accessor).concat(e.id)
              );
            });
          },
          v = function (e, t) {
            var a = Object(u.jsx)(
              'input',
              {
                type: 'checkbox',
                className: 'form-check-input',
                id: t,
                checked: m(t),
                onChange: p,
              },
              'item'.concat(t)
            );
            if (e)
              return Object(u.jsx)('td', { children: a }, 'checkbox'.concat(t));
          };
        return Object(u.jsx)('div', {
          className: 'table-responsive',
          children: Object(u.jsxs)('table', {
            className: 'table table-hover',
            children: [
              Object(u.jsx)('thead', {
                className: 'text-white bg-success',
                children: Object(u.jsxs)('tr', {
                  children: [
                    (function (e) {
                      var t = Object(u.jsx)(
                        'input',
                        {
                          type: 'checkbox',
                          className: 'form-check-input',
                          id: 0,
                          checked: m(0),
                          onChange: p,
                          ref: b,
                        },
                        'selectAll'
                      );
                      if (e)
                        return Object(u.jsx)('th', {
                          scope: 'col',
                          style: { width: 50 },
                          children: t,
                        });
                    })(c),
                    t.map(function (e, t) {
                      return Object(u.jsx)(
                        'th',
                        { scope: 'col', children: e.name },
                        e.name
                      );
                    }),
                  ],
                }),
              }),
              Object(u.jsx)('tbody', {
                children: a.map(function (e) {
                  return Object(u.jsxs)(
                    'tr',
                    { children: [v(c, e.id), j(e)] },
                    'tr'.concat(e.id)
                  );
                }),
              }),
            ],
          }),
        });
      }
      function T(e) {
        var t = e.id,
          a = e.label,
          n = e.title,
          r = e.body,
          s = e.handleAction,
          c = e.actionLabel,
          i = void 0 === c ? 'Delete' : c,
          o = Object(u.jsxs)('div', {
            className: 'modal-header rounded-0 text-white bg-success',
            children: [
              Object(u.jsx)('h5', {
                className: 'modal-title',
                id: n,
                children: n,
              }),
              Object(u.jsx)('button', {
                type: 'button',
                className: 'btn-close',
                'data-bs-dismiss': 'modal',
                'aria-label': 'Close',
              }),
            ],
          }),
          l = Object(u.jsx)('div', {
            className: 'modal-body text-dark',
            children: Object(u.jsx)('p', {
              className: 'text-lg-start',
              children: r,
            }),
          }),
          d = Object(u.jsxs)('div', {
            className: 'modal-footer border-white',
            children: [
              Object(u.jsx)('button', {
                type: 'button',
                className: 'btn btn-secondary rounded-0',
                'data-bs-dismiss': 'modal',
                children: 'Close',
              }),
              Object(u.jsx)('button', {
                type: 'button',
                className: 'btn btn-danger rounded-0',
                onClick: s,
                'data-bs-dismiss': 'modal',
                children: i,
              }),
            ],
          });
        return Object(u.jsx)('div', {
          className: 'modal fade',
          id: t,
          tabIndex: '-1',
          'aria-labelledby': a,
          'aria-hidden': 'true',
          children: Object(u.jsx)('div', {
            className: 'modal-dialog',
            children: Object(u.jsxs)('div', {
              className: 'modal-content rounded-0',
              children: [o, l, d],
            }),
          }),
        });
      }
      function D(e) {
        var t = e.checked,
          a = e.title,
          r = e.handleDestroy,
          s = Object(n.useMemo)(
            function () {
              return Object.keys(t).filter(function (e) {
                return t[e];
              }).length;
            },
            [t]
          );
        return Object(u.jsx)(u.Fragment, {
          children:
            s > 0 &&
            Object(u.jsxs)('div', {
              className: 'mt-3',
              children: [
                Object(u.jsxs)('span', {
                  className: 'me-2',
                  children: [
                    s,
                    ' ',
                    a.toLowerCase(),
                    ' selected. With selected:',
                  ],
                }),
                Object(u.jsx)('button', {
                  type: 'button',
                  className: 'ml-3 btn btn-danger rounded-0',
                  'data-bs-toggle': 'modal',
                  'data-bs-target': '#deleteChecked',
                  children: 'Delete',
                }),
                Object(u.jsx)(T, {
                  id: 'deleteChecked',
                  label: 'deleteCheckedLabel',
                  title: 'Delete '.concat(a),
                  body: 'You are about to delete '
                    .concat(s, ' ')
                    .concat(a.toLowerCase(), '. This action cannot be undone.'),
                  handleAction: r,
                }),
              ],
            }),
        });
      }
      function M() {
        return Object(u.jsxs)(u.Fragment, {
          children: [
            Object(u.jsx)('div', {
              className: 'd-flex justify-content-center',
              children: Object(u.jsx)('div', {
                className: 'spinner-border text-primary',
                role: 'status',
                style: { width: '3rem', height: '3rem' },
              }),
            }),
            Object(u.jsx)('div', {
              className: 'd-flex justify-content-center',
            }),
          ],
        });
      }
      function I(e) {
        var t = e.message,
          a = e.setMessage,
          r = e.timeout,
          s = void 0 === r ? 1e4 : r,
          c = Object(n.useState)(!0),
          i = Object(d.a)(c, 2),
          o = i[0],
          l = i[1];
        Object(n.useEffect)(
          function () {
            if (s) {
              var e = setTimeout(function () {
                l(!1), a(null);
              }, s);
              return function () {
                return clearTimeout(e);
              };
            }
          },
          [a, s]
        );
        return Object(u.jsx)(u.Fragment, {
          children:
            o &&
            t &&
            !E(t) &&
            Object(u.jsxs)('div', {
              className: 'alert alert-'.concat(
                t.type,
                ' alert-dismissible fade show rounded-0'
              ),
              role: 'alert',
              children: [
                t.message,
                Object(u.jsx)('button', {
                  type: 'button',
                  className: 'btn-close',
                  onClick: function () {
                    l(!1), a(null);
                  },
                  'aria-label': 'Close',
                }),
              ],
            }),
        });
      }
      var F = a(26);
      function A(e) {
        var t = e.pageLimits,
          a = e.handleCurrentPageChange,
          r = e.handleLimitChange,
          s = Object(F.a)(e, [
            'pageLimits',
            'handleCurrentPageChange',
            'handleLimitChange',
          ]),
          c = (function (e) {
            var t = e.count,
              a = e.offset,
              r = void 0 === a ? 0 : a,
              s = e.limit,
              c = void 0 === s ? t : s,
              i = e.currentPage,
              o = void 0 === i ? 1 : i,
              u = e.onEachSide,
              l = void 0 === u ? 3 : u,
              b = Object(n.useState)(1),
              p = Object(d.a)(b, 2),
              m = p[0],
              j = p[1],
              v = Object(n.useState)(1),
              h = Object(d.a)(v, 2),
              g = h[0],
              O = h[1],
              f = Object(n.useState)({ pageList: [] }),
              x = Object(d.a)(f, 2),
              y = x[0],
              S = x[1],
              k = Object(n.useCallback)(
                function () {
                  var e = Math.ceil(t / c),
                    a = { pageList: [] },
                    n = [];
                  if (
                    (o > 1 && ((a.first = 1), (a.prev = o - 1)),
                    o < e && ((a.next = o + 1), (a.last = e)),
                    o > l)
                  )
                    for (var r = l; r >= 0; r--) n.push(o - r);
                  else for (var s = 1; s <= o; s++) n.push(s);
                  for (var i = 1; i <= l; i++) {
                    var u = o + i;
                    if (u > e) break;
                    n.push(u);
                  }
                  if (n.length) {
                    var d = n[n.length - 1];
                    d && d < e && n.push('...', e);
                  }
                  return (a.pageList = n), a;
                },
                [t, c, o, l]
              );
            return (
              Object(n.useEffect)(
                function () {
                  S(k()), j(r + 1);
                  var e = r + c;
                  O((e = e > t ? t : e));
                },
                [k, r, c, t]
              ),
              {
                from: m,
                to: g,
                count: t,
                pages: y,
                currentPage: o,
                showPaginator: Math.ceil(t / c) > 1,
              }
            );
          })(s),
          i = c.from,
          o = c.to,
          l = c.count,
          b = c.pages,
          p = c.currentPage,
          m = c.showPaginator,
          j = function (e) {
            return a(e);
          },
          v = function (e) {
            var t = e.target.value;
            t && ('all' !== t && (t = parseInt(t)), r(t));
          },
          h = function (e) {
            var t = e.page,
              a = e.label;
            return void 0 === t
              ? Object(u.jsx)(u.Fragment, {})
              : Object(u.jsx)('li', {
                  className: 'page-item',
                  children: Object(u.jsx)('button', {
                    className: 'page-link',
                    onClick: function () {
                      return j(t);
                    },
                    children: a,
                  }),
                });
          },
          g = function () {
            var e = b.pageList.map(function (e) {
              return '...' === e
                ? Object(u.jsx)(
                    'li',
                    {
                      className: 'page-item',
                      children: Object(u.jsx)('span', {
                        className: 'p-2',
                        children: '...',
                      }),
                    },
                    e
                  )
                : Object(u.jsx)(
                    'li',
                    {
                      className: 'page-item' + (e === p ? ' active' : ''),
                      children: Object(u.jsx)('button', {
                        className: 'page-link',
                        onClick: function () {
                          return j(e);
                        },
                        children: e,
                      }),
                    },
                    e
                  );
            });
            return Object(u.jsx)(u.Fragment, { children: e });
          },
          O = function () {
            var e = t.map(function (e) {
              return Object(u.jsx)(
                'option',
                { value: e, children: e.toString() },
                e
              );
            });
            return Object(u.jsxs)('div', {
              className: 'float-md-end',
              children: [
                Object(u.jsx)('label', { htmlFor: 'limit', children: 'Rows:' }),
                Object(u.jsx)('select', {
                  name: 'limit',
                  className: 'form-select-sm ms-2',
                  onChange: v,
                  value: s.limit ? s.limit.toString() : 'all',
                  children: e,
                }),
              ],
            });
          };
        return Object(u.jsxs)('div', {
          className: 'mb-3',
          children: [
            Object(u.jsx)('div', {
              className: 'row mb-3',
              children: Object(u.jsxs)('div', {
                className: 'col-12',
                children: [
                  m &&
                    Object(u.jsx)('nav', {
                      className: 'float-md-start',
                      'aria-label': 'paginator',
                      children: Object(u.jsxs)('ul', {
                        className: 'pagination',
                        id: 'pager',
                        children: [
                          Object(u.jsx)(h, { page: b.first, label: 'First' }),
                          Object(u.jsx)(h, { page: b.prev, label: 'Prev' }),
                          Object(u.jsx)(g, {}),
                          Object(u.jsx)(h, { page: b.next, label: 'Next' }),
                          Object(u.jsx)(h, { page: b.last, label: 'Last' }),
                        ],
                      }),
                    }),
                  Object(u.jsx)(O, {}),
                ],
              }),
            }),
            Object(u.jsxs)('div', {
              className: 'text-lg-start',
              children: ['Showing ', i, ' to ', o, ' of ', l, ' records'],
            }),
          ],
        });
      }
      var L = a(8);
      function U(e) {
        var t = e.text,
          a = void 0 === t ? null : t;
        return Object(u.jsxs)(u.Fragment, {
          children: [
            a && Object(u.jsx)('span', { className: 'p-2', children: a }),
            Object(u.jsx)('span', {
              className: 'spinner-border spinner-border-sm',
              role: 'status',
            }),
          ],
        });
      }
      function Q(e) {
        var t = e.initialValues,
          a = e.FormInputs,
          n = e.handleSubmit;
        return Object(u.jsx)(L.a, {
          initialValues: t,
          onSubmit: function (e, t) {
            n(e), t.setSubmitting(!1);
          },
          children: function (e) {
            return Object(u.jsx)('div', {
              className: 'container-fluid pt-3',
              children: Object(u.jsxs)('form', {
                onSubmit: e.handleSubmit,
                className: 'row gy-2 gx-3 align-items-center',
                children: [
                  Object(u.jsx)(a, {}),
                  Object(u.jsx)('div', {
                    className: 'col-auto',
                    children: Object(u.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-primary rounded-0',
                      disabled: e.isSubmitting,
                      children: e.isSubmitting
                        ? Object(u.jsx)(U, {})
                        : 'Search',
                    }),
                  }),
                ],
              }),
            });
          },
        });
      }
      function V(e) {
        var t,
          a = e.cols,
          r = e.data,
          s = void 0 === r ? null : r,
          c = e.pagination,
          l = e.title,
          b = e.message,
          p = e.setMessage,
          m = e.handleQuery,
          j = e.destroyChecked,
          v = e.createItemLink,
          h = e.displayMessages,
          g = void 0 === h || h,
          O = e.selection,
          f = void 0 === O || O,
          x = e.pageLimits,
          y = void 0 === x ? [5, 10, 15, 25, 50, 'all'] : x,
          S = e.searchFormInitialValues,
          k = e.SearchFormInputs,
          N = Object(n.useState)({}),
          w = Object(d.a)(N, 2),
          P = w[0],
          T = w[1],
          F = Object(n.useState)(!0),
          L = Object(d.a)(F, 2),
          U = L[0],
          V = L[1],
          B = Object(n.useState)(1),
          R = Object(d.a)(B, 2),
          G = R[0],
          _ = R[1],
          H = Object(n.useState)(5),
          z = Object(d.a)(H, 2),
          $ = z[0],
          W = z[1],
          J = Object(n.useState)(S || {}),
          K = Object(d.a)(J, 2),
          Y = K[0],
          Z = K[1],
          X = JSON.stringify(Y),
          ee = JSON.stringify(s),
          te = Object(o.g)(),
          ae = Object(o.f)();
        Object(n.useEffect)(
          function () {
            var e;
            (null === (e = te.state) || void 0 === e ? void 0 : e.message) &&
              (p(te.state.message), ae.replace({ state: {} }));
          },
          [ae, null === (t = te.state) || void 0 === t ? void 0 : t.message, p]
        ),
          Object(n.useEffect)(
            function () {
              'null' !== ee && V(!1);
            },
            [ee]
          ),
          Object(n.useEffect)(
            function () {
              _(1);
            },
            [X, $]
          ),
          Object(n.useEffect)(
            function () {
              var e,
                t =
                  ((e = Object(q.a)(
                    Object(q.a)({}, Y),
                    {},
                    { page: G, limit: $ }
                  )),
                  '?' +
                    Object.entries(e)
                      .map(function (e) {
                        var t = Object(d.a)(e, 2),
                          a = t[0],
                          n = t[1];
                        if (n) return ''.concat(a, '=').concat(n);
                      })
                      .filter(function (e) {
                        return void 0 !== e;
                      })
                      .join('&'));
              m(t);
            },
            [G, $, X, m, Y]
          );
        return Object(u.jsxs)('div', {
          className: 'container-fluid pt-3',
          children: [
            g &&
              b &&
              Object(u.jsx)('div', {
                className: 'pb-1',
                children: Object(u.jsx)(I, { message: b, setMessage: p }),
              }),
            Object(u.jsxs)('div', {
              className: 'card shadow-lg rounded-0',
              children: [
                Object(u.jsxs)('div', {
                  className: 'card-header text-white bg-success rounded-0',
                  children: [
                    Object(u.jsx)('h4', {
                      className: 'text-lg-start float-md-start',
                      children: l,
                    }),
                    v &&
                      Object(u.jsx)(i.b, {
                        to: v,
                        className: 'btn btn-primary float-md-end rounded-0',
                        children: 'Create',
                      }),
                    k &&
                      S &&
                      !E(S) &&
                      Object(u.jsx)('div', {
                        className: 'row col-12',
                        children: Object(u.jsx)(Q, {
                          initialValues: S,
                          FormInputs: k,
                          handleSubmit: function (e) {
                            return Z(Object(q.a)({}, e));
                          },
                        }),
                      }),
                    Object(u.jsx)(D, {
                      checked: P,
                      title: l,
                      handleDestroy: function () {
                        j(
                          Object.keys(P).filter(function (e) {
                            return P[e];
                          })
                        ),
                          T({});
                      },
                    }),
                  ],
                }),
                Object(u.jsx)('div', {
                  className: 'card-body',
                  children: U
                    ? Object(u.jsx)(M, {})
                    : Object(u.jsx)(u.Fragment, {
                        children:
                          s && s.length > 0
                            ? Object(u.jsx)(C, {
                                cols: a,
                                data: s,
                                checked: P,
                                setChecked: T,
                                selection: f,
                              })
                            : Object(u.jsxs)('h3', {
                                className: 'text-center',
                                children: ['No ', l.toLowerCase(), ' found'],
                              }),
                      }),
                }),
                s &&
                  s.length > 0 &&
                  Object(u.jsx)('div', {
                    className: 'card-footer border-white',
                    children: Object(u.jsx)(
                      A,
                      Object(q.a)(
                        Object(q.a)({}, c),
                        {},
                        {
                          pageLimits: y,
                          handleCurrentPageChange: _,
                          handleLimitChange: W,
                        }
                      )
                    ),
                  }),
              ],
            }),
          ],
        });
      }
      var B = function (e) {
          var t = e.inline,
            a = e.idOrName,
            n = e.label,
            r = e.required,
            s = e.children,
            c = t
              ? { div: 'col-auto', label: 'visually-hidden' }
              : { div: 'mb-3', label: 'form-label' };
          return Object(u.jsxs)('div', {
            className: c.div,
            children: [
              Object(u.jsxs)('label', {
                className: c.label,
                htmlFor: a,
                children: [
                  n,
                  r &&
                    Object(u.jsx)('span', {
                      className: 'text-danger',
                      children: ' *',
                    }),
                ],
              }),
              s,
            ],
          });
        },
        R = function (e) {
          var t = e.meta,
            a = t.touched,
            n = t.error;
          return Object(u.jsx)(u.Fragment, {
            children:
              a &&
              n &&
              Object(u.jsx)(
                'div',
                {
                  className: 'form-text text-danger text-md-start',
                  children: Object(u.jsx)('span', { children: n }),
                },
                n
              ),
          });
        },
        G = function (e) {
          var t =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            a = e.touched,
            n = e.error,
            r = 'form-control rounded-0';
          return (
            t &&
              (a && n && (r += ' is-invalid'), a && !n && (r += ' is-valid')),
            r
          );
        },
        _ = function (e) {
          var t = e.label,
            a = e.inline,
            n = void 0 !== a && a,
            r = e.validation,
            s = Object(F.a)(e, ['label', 'inline', 'validation']),
            c = Object(L.b)(s),
            i = Object(d.a)(c, 2),
            o = i[0],
            l = i[1];
          return Object(u.jsxs)(B, {
            inline: n,
            idOrName: s.id || s.name,
            label: t,
            required: s.required,
            children: [
              Object(u.jsx)(
                'input',
                Object(q.a)(Object(q.a)({ className: G(l, s.value, r) }, o), s)
              ),
              Object(u.jsx)(R, { meta: l }),
            ],
          });
        },
        H = function (e) {
          var t = e.label,
            a = e.inline,
            n = void 0 !== a && a,
            r = e.validation,
            s = e.options,
            c = e.children,
            i = Object(F.a)(e, [
              'label',
              'inline',
              'validation',
              'options',
              'children',
            ]),
            o = Object(L.b)(i),
            l = Object(d.a)(o, 2),
            b = l[0],
            p = l[1],
            m = (function () {
              if (null === s || void 0 === s ? void 0 : s.length)
                return s.map(function (e) {
                  return 'string' === typeof e
                    ? Object(u.jsx)('option', { value: e, children: e }, e)
                    : Object(u.jsx)(
                        'option',
                        { value: e.value, children: e.label },
                        ''.concat(e.value)
                      );
                });
            })();
          return Object(u.jsxs)(B, {
            inline: n,
            idOrName: i.name,
            label: t,
            required: i.required,
            children: [
              Object(u.jsx)(
                'select',
                Object(q.a)(
                  Object(q.a)(
                    Object(q.a)({ className: G(p, i.value, r) }, b),
                    i
                  ),
                  {},
                  { children: Object(u.jsxs)(u.Fragment, { children: [c, m] }) }
                )
              ),
              Object(u.jsx)(R, { meta: p }),
            ],
          });
        },
        z = function (e) {
          var t = e.label,
            a = e.inline,
            n = void 0 !== a && a,
            r = e.validation,
            s = Object(F.a)(e, ['label', 'inline', 'validation']),
            c = Object(L.b)(s),
            i = Object(d.a)(c, 2),
            o = i[0],
            l = i[1];
          return Object(u.jsxs)(B, {
            inline: n,
            idOrName: s.name,
            label: t,
            required: s.required,
            children: [
              Object(u.jsx)(
                'textarea',
                Object(q.a)(
                  Object(q.a)(
                    Object(q.a)({ className: G(l, s.value, r), rows: 5 }, o),
                    s
                  ),
                  {},
                  { children: s.value }
                )
              ),
              Object(u.jsx)(R, { meta: l }),
            ],
          });
        },
        $ = function () {
          return Object(u.jsx)(_, {
            name: 'name',
            label: 'Name',
            type: 'search',
            placeholder: 'Enter category name',
            inline: !0,
            validation: !1,
          });
        },
        W = r.a.memo(function () {
          var e,
            t = Object(n.useState)(''),
            a = Object(d.a)(t, 2),
            r = a[0],
            s = a[1],
            c = Object(n.useState)(null),
            i = Object(d.a)(c, 2),
            o = i[0],
            l = i[1],
            b = y(r),
            p = w(),
            m = Object(d.a)(p, 1)[0],
            j = Object(n.useMemo)(function () {
              return [
                { name: 'Name', accessor: 'name', link: '/categories/:id' },
                { name: 'Description', accessor: 'description' },
              ];
            }, []),
            g = b.isSuccess
              ? b.data.categories
                ? b.data.categories
                : []
              : null;
          Object(n.useEffect)(
            function () {
              var e;
              (null === (e = b.data) || void 0 === e ? void 0 : e.error) &&
                l({ type: 'danger', message: b.data.error });
            },
            [null === (e = b.data) || void 0 === e ? void 0 : e.error]
          );
          var O = Object(n.useCallback)(function (e) {
              e.length && s(e);
            }, []),
            f = Object(n.useCallback)(
              (function () {
                var e = Object(h.a)(
                  v.a.mark(function e(t) {
                    var a, n, r, s;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t.length) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (e.prev = 1), (e.next = 4), m(t.join()).unwrap()
                              );
                            case 4:
                              (a = e.sent),
                                (n = a.message),
                                (r = a.error),
                                (s = a.invalidData),
                                n && l({ type: 'success', message: n }),
                                r && l({ type: 'danger', message: r }),
                                s && l({ type: 'danger', message: s.id }),
                                (e.next = 16);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(1)),
                                l({ type: 'danger', message: e.t0.message });
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 13]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [m]
            );
          return Object(u.jsx)(V, {
            cols: j,
            data: g,
            pagination:
              b.isSuccess && b.data.pagination
                ? b.data.pagination
                : { count: 0 },
            title: 'Categories',
            message: o,
            setMessage: l,
            createItemLink: '/categories/create',
            handleQuery: O,
            destroyChecked: f,
            searchFormInitialValues: { name: '' },
            SearchFormInputs: $,
          });
        });
      function J(e) {
        var t = e.title,
          a = e.message,
          n = e.setMessage,
          r = e.cardBody,
          s = e.cardFooter,
          c = void 0 === s ? Object(u.jsx)(u.Fragment, {}) : s;
        return Object(u.jsx)('div', {
          className: 'container-fluid pt-5',
          children: Object(u.jsx)('div', {
            className: 'row',
            children: Object(u.jsxs)('div', {
              className: 'col-md-7 mx-auto col-lg-5',
              children: [
                a &&
                  !E(a) &&
                  Object(u.jsx)('div', {
                    className: 'pb-1',
                    children: Object(u.jsx)(I, { message: a, setMessage: n }),
                  }),
                Object(u.jsxs)('div', {
                  className: 'card shadow-lg rounded-0',
                  children: [
                    Object(u.jsxs)('div', {
                      className: 'card-header text-white bg-success rounded-0',
                      children: [
                        Object(u.jsx)('h4', {
                          className: 'text-lg-start',
                          children: t,
                        }),
                        Object(u.jsx)('span', {
                          className: 'text-danger',
                          children: ' *',
                        }),
                        Object(u.jsx)('span', { children: ' Required fields' }),
                      ],
                    }),
                    Object(u.jsx)('div', {
                      className: 'card-body',
                      children: r,
                    }),
                    c &&
                      Object(u.jsx)('div', {
                        className: 'card-footer',
                        children: c,
                      }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var K = a(7),
        Y = K.c().shape({
          name: K.d()
            .typeError('Product name is required')
            .required('Product name is required')
            .min(2, 'Product name must be at least 2 characters long')
            .max(50, 'Product name must not exceed 50 characters')
            .matches(/^[aA-zZ\s]+$/, 'Product name must be alphabetic'),
          description: K.d()
            .min(5, 'Description should be at least 5 characters long')
            .max(255, 'Description should not exceed 255 characters'),
        }),
        Z = function () {
          var e = Object(n.useState)(null),
            t = Object(d.a)(e, 2),
            a = t[0],
            r = t[1],
            s = k(),
            c = Object(d.a)(s, 1)[0],
            i = Object(o.f)();
          Object(n.useEffect)(
            function () {
              (null === a || void 0 === a ? void 0 : a.type) &&
                (null === a || void 0 === a ? void 0 : a.message) &&
                window.scrollTo(0, 0);
            },
            [
              null === a || void 0 === a ? void 0 : a.type,
              null === a || void 0 === a ? void 0 : a.message,
            ]
          );
          var l = Object(u.jsx)(L.a, {
            initialValues: { name: '', description: '' },
            validationSchema: Y,
            onSubmit: (function () {
              var e = Object(h.a)(
                v.a.mark(function e(t, a) {
                  var n, s, o, u, l;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              '' === t.description && delete t.description,
                              (e.prev = 1),
                              (e.next = 4),
                              c(t).unwrap()
                            );
                          case 4:
                            (n = e.sent),
                              (s = n.category),
                              (o = n.error),
                              (u = n.invalidData),
                              a.setSubmitting(!1),
                              s &&
                                ((l = {
                                  type: 'success',
                                  message: 'Category created successfully',
                                }),
                                i.push({
                                  pathname: '/categories',
                                  state: { message: l },
                                })),
                              o && r({ type: 'danger', message: o }),
                              u &&
                                (a.setErrors(u),
                                r({
                                  type: 'danger',
                                  message: 'Please correct the errors below',
                                })),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(1)),
                              r({ type: 'danger', message: e.t0.message });
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 14]]
                  );
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            children: function (e) {
              return Object(u.jsx)(u.Fragment, {
                children: Object(u.jsxs)('form', {
                  onSubmit: e.handleSubmit,
                  children: [
                    Object(u.jsx)(_, {
                      name: 'name',
                      label: 'Name',
                      type: 'text',
                      placeholder: 'Enter category name',
                      required: !0,
                    }),
                    Object(u.jsx)(z, {
                      name: 'description',
                      label: 'Description',
                    }),
                    Object(u.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-primary rounded-0 me-2 mt-3',
                      disabled: e.isSubmitting,
                      children: e.isSubmitting
                        ? Object(u.jsx)(U, { text: 'Adding' })
                        : 'Add',
                    }),
                  ],
                }),
              });
            },
          });
          return Object(u.jsx)(J, {
            title: 'Add Category',
            message: a,
            setMessage: r,
            cardBody: l,
          });
        },
        X = function (e) {
          var t,
            a = e.match.params.categoryId,
            r = Object(n.useState)(null),
            s = Object(d.a)(r, 2),
            c = s[0],
            i = s[1],
            l = S(a),
            b = N(),
            p = Object(d.a)(b, 1)[0],
            m = w(),
            j = Object(d.a)(m, 1)[0],
            g = Object(n.useMemo)(
              function () {
                if (l.isSuccess && l.data.category) {
                  var e = Object(q.a)({}, l.data.category);
                  return null === e.description && (e.description = ''), e;
                }
                return { name: '', description: '' };
              },
              [
                l.isSuccess,
                null === (t = l.data) || void 0 === t ? void 0 : t.category,
              ]
            ),
            O = Object(o.f)();
          Object(n.useEffect)(
            function () {
              (null === c || void 0 === c ? void 0 : c.type) &&
                (null === c || void 0 === c ? void 0 : c.message) &&
                window.scrollTo(0, 0);
            },
            [
              null === c || void 0 === c ? void 0 : c.type,
              null === c || void 0 === c ? void 0 : c.message,
            ]
          );
          var f = Object(n.useCallback)(
              Object(h.a)(
                v.a.mark(function e() {
                  var t, n, r, s;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!a.length) {
                              e.next = 16;
                              break;
                            }
                            return (e.prev = 1), (e.next = 4), j(a).unwrap();
                          case 4:
                            (t = e.sent),
                              (n = t.message),
                              (r = t.error),
                              (s = t.invalidData),
                              n &&
                                O.push({
                                  pathname: '/categories',
                                  state: {
                                    message: { type: 'success', message: n },
                                  },
                                }),
                              r && i({ type: 'danger', message: r }),
                              s && i({ type: 'danger', message: s.id }),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(1)),
                              i({ type: 'danger', message: e.t0.message });
                          case 16:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 13]]
                  );
                })
              ),
              [a, O, j]
            ),
            x = Object(u.jsx)(L.a, {
              enableReinitialize: !0,
              initialValues: g,
              validationSchema: Y,
              onSubmit: (function () {
                var e = Object(h.a)(
                  v.a.mark(function e(t, a) {
                    var n, r, s, c, o;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                '' === t.description && delete t.description,
                                (e.prev = 1),
                                (e.next = 4),
                                p(t).unwrap()
                              );
                            case 4:
                              (n = e.sent),
                                (r = n.category),
                                (s = n.error),
                                (c = n.invalidData),
                                a.setSubmitting(!1),
                                r &&
                                  ((o = {
                                    type: 'success',
                                    message: 'Category updated successfully',
                                  }),
                                  O.push({
                                    pathname: '/categories',
                                    state: { message: o },
                                  })),
                                s && i({ type: 'danger', message: s }),
                                c &&
                                  (a.setErrors(c),
                                  i({
                                    type: 'danger',
                                    message: 'Please correct the errors below',
                                  })),
                                (e.next = 17);
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e.catch(1)),
                                i({ type: 'danger', message: e.t0.message });
                            case 17:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 14]]
                    );
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              children: function (e) {
                return Object(u.jsx)(u.Fragment, {
                  children: l.isFetching
                    ? Object(u.jsx)(M, {})
                    : Object(u.jsxs)('form', {
                        onSubmit: e.handleSubmit,
                        children: [
                          Object(u.jsx)(_, {
                            name: 'name',
                            label: 'Name',
                            type: 'text',
                            placeholder: 'Enter category name',
                            required: !0,
                          }),
                          Object(u.jsx)(z, {
                            name: 'description',
                            label: 'Description',
                          }),
                          Object(u.jsx)('button', {
                            type: 'submit',
                            className: 'btn btn-primary rounded-0 me-2 mt-3',
                            disabled: e.isSubmitting,
                            children: e.isSubmitting
                              ? Object(u.jsx)(U, { text: 'Updating' })
                              : 'Update',
                          }),
                          Object(u.jsx)('button', {
                            type: 'button',
                            className: 'btn btn-danger rounded-0 mt-3',
                            'data-bs-toggle': 'modal',
                            'data-bs-target': '#deleteCategory',
                            children: 'Delete',
                          }),
                        ],
                      }),
                });
              },
            });
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(J, {
                title: 'Edit Category',
                message: c,
                setMessage: i,
                cardBody: x,
              }),
              Object(u.jsx)(T, {
                id: 'deleteCategory',
                label: 'deleteCategoryLabel',
                title: 'Delete Category',
                body: 'Are you sure you want to delete this category? This action cannot be undone.',
                handleAction: f,
              }),
            ],
          });
        },
        ee = f.injectEndpoints({
          endpoints: function (e) {
            return {
              getProducts: e.query({
                query: function (e) {
                  return {
                    url: e && e.length ? '/products'.concat(e) : '/products',
                    validateStatus: function (e, t) {
                      return (
                        !!(null === t || void 0 === t ? void 0 : t.error) ||
                        e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return (null === e || void 0 === e ? void 0 : e.products)
                    ? ['Product'].concat(
                        Object(g.a)(
                          e.products.map(function (e) {
                            return { type: 'Product', id: e.id };
                          })
                        )
                      )
                    : ['Product'];
                },
              }),
              getProduct: e.query({
                query: function (e) {
                  return {
                    url: '/products/'.concat(e),
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return [{ type: 'Product', id: a }];
                },
              }),
              addNewProduct: e.mutation({
                query: function (e) {
                  return {
                    url: '/products',
                    method: 'POST',
                    body: e,
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Product'],
              }),
              editProduct: e.mutation({
                query: function (e) {
                  return {
                    url: '/products',
                    method: 'PATCH',
                    body: e,
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: function (e, t, a) {
                  return [{ type: 'Product', id: a.id }];
                },
              }),
              destroyProduct: e.mutation({
                query: function (e) {
                  return {
                    url: '/products/'.concat(e),
                    method: 'DELETE',
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Product'],
              }),
            };
          },
        }),
        te = ee.useGetProductsQuery,
        ae = ee.useGetProductQuery,
        ne = ee.useAddNewProductMutation,
        re = ee.useEditProductMutation,
        se = ee.useDestroyProductMutation,
        ce = function () {
          return Object(u.jsx)(_, {
            name: 'name',
            label: 'Name',
            type: 'search',
            placeholder: 'Enter product name',
            inline: !0,
            validation: !1,
          });
        },
        ie = r.a.memo(function () {
          var e,
            t = Object(n.useState)(''),
            a = Object(d.a)(t, 2),
            r = a[0],
            s = a[1],
            c = Object(n.useState)(null),
            i = Object(d.a)(c, 2),
            o = i[0],
            l = i[1],
            b = te(r),
            p = se(),
            m = Object(d.a)(p, 1)[0],
            j = Object(n.useMemo)(function () {
              return [
                { name: 'Name', accessor: 'name', link: '/products/:id' },
                { name: 'Unit cost', accessor: 'unitCost' },
                { name: 'Unit price', accessor: 'unitPrice' },
                { name: 'Store', accessor: 'store' },
                { name: 'Counter', accessor: 'counter' },
                {
                  name: 'Category',
                  accessor: 'category',
                  link: '/category/:categoryId',
                  callback: function (e) {
                    return e.name;
                  },
                },
              ];
            }, []),
            g = b.isSuccess ? (b.data.products ? b.data.products : []) : null;
          Object(n.useEffect)(
            function () {
              var e;
              (null === (e = b.data) || void 0 === e ? void 0 : e.error) &&
                l({ type: 'danger', message: b.data.error });
            },
            [null === (e = b.data) || void 0 === e ? void 0 : e.error]
          );
          var O = Object(n.useCallback)(function (e) {
              e.length && s(e);
            }, []),
            f = Object(n.useCallback)(
              (function () {
                var e = Object(h.a)(
                  v.a.mark(function e(t) {
                    var a, n, r, s;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t.length) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (e.prev = 1), (e.next = 4), m(t.join()).unwrap()
                              );
                            case 4:
                              (a = e.sent),
                                (n = a.message),
                                (r = a.error),
                                (s = a.invalidData),
                                n && l({ type: 'success', message: n }),
                                r && l({ type: 'danger', message: r }),
                                s && l({ type: 'danger', message: s.id }),
                                (e.next = 16);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(1)),
                                l({ type: 'danger', message: e.t0.message });
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 13]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [m]
            );
          return Object(u.jsx)(V, {
            cols: j,
            data: g,
            pagination:
              b.isSuccess && b.data.pagination
                ? b.data.pagination
                : { count: 0 },
            title: 'Products',
            message: o,
            setMessage: l,
            createItemLink: '/products/create',
            handleQuery: O,
            destroyChecked: f,
            searchFormInitialValues: { name: '' },
            SearchFormInputs: ce,
          });
        }),
        oe = K.c().shape({
          name: K.d()
            .typeError('Product name is required')
            .required('Product name is required')
            .min(2, 'Product name must be at least 2 characters long')
            .max(50, 'Product name must not exceed 50 characters'),
          unitCost: K.b()
            .typeError('Unit cost must be a number')
            .required('Unit cost is required')
            .positive('Unit cost cannot be negative')
            .test(
              'maxTwoDecimalPoints',
              'Unit price must have at most 2 decimal points',
              function (e) {
                return /^\d+(\.\d{1,2})?$/.test(e);
              }
            ),
          unitPrice: K.b()
            .typeError('Unit price must be a number')
            .required('Unit price is required')
            .positive('Unit price cannot be negative')
            .test(
              'maxTwoDecimalPoints',
              'Unit price must have at most 2 decimal points',
              function (e) {
                return /^\d+(\.\d{1,2})?$/.test(e);
              }
            ),
          store: K.b()
            .typeError('Please provide a valid number for items in store')
            .required('Number of items in store is required')
            .positive('Items in store cannot be negative')
            .integer('Items in store must be an integer'),
          counter: K.b()
            .typeError('Please provide a valid number for items in counter')
            .required('Number of items in counter is required')
            .positive('Items in counter cannot be negative')
            .integer('Items in counter must be an integer'),
          description: K.d()
            .min(5, 'Description should be at least 5 characters long')
            .max(255, 'Description should not exceed 255 characters'),
        }),
        ue = function () {
          var e,
            t = Object(n.useState)(null),
            a = Object(d.a)(t, 2),
            r = a[0],
            s = a[1],
            c = ne(),
            i = Object(d.a)(c, 1)[0],
            l = y('?limit=all'),
            b = Object(o.f)(),
            p = Object(n.useMemo)(
              function () {
                return l.isSuccess && l.data.categories
                  ? l.data.categories.map(function (e) {
                      return { value: e.id, label: e.name };
                    })
                  : [{ value: '', label: 'No results found' }];
              },
              [
                l.isSuccess,
                null === (e = l.data) || void 0 === e ? void 0 : e.categories,
              ]
            );
          Object(n.useEffect)(
            function () {
              (null === r || void 0 === r ? void 0 : r.type) &&
                (null === r || void 0 === r ? void 0 : r.message) &&
                window.scrollTo(0, 0);
            },
            [
              null === r || void 0 === r ? void 0 : r.type,
              null === r || void 0 === r ? void 0 : r.message,
            ]
          );
          var m = Object(u.jsx)(L.a, {
            initialValues: {
              name: '',
              unitCost: '',
              unitPrice: '',
              store: '',
              counter: '',
              description: '',
              categoryId: '',
            },
            validationSchema: oe,
            onSubmit: (function () {
              var e = Object(h.a)(
                v.a.mark(function e(t, a) {
                  var n, r, c, o, u;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              '' === t.description && delete t.description,
                              (e.prev = 1),
                              (e.next = 4),
                              i(t).unwrap()
                            );
                          case 4:
                            (n = e.sent),
                              (r = n.product),
                              (c = n.error),
                              (o = n.invalidData),
                              a.setSubmitting(!1),
                              r &&
                                ((u = {
                                  type: 'success',
                                  message: 'Product created successfully',
                                }),
                                b.push({
                                  pathname: '/products',
                                  state: { message: u },
                                })),
                              c && s({ type: 'danger', message: c }),
                              o &&
                                (a.setErrors(o),
                                s({
                                  type: 'danger',
                                  message: 'Please correct the errors below',
                                })),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(1)),
                              s({ type: 'danger', message: e.t0.message });
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 14]]
                  );
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            children: function (e) {
              return Object(u.jsx)(u.Fragment, {
                children: Object(u.jsxs)('form', {
                  onSubmit: e.handleSubmit,
                  children: [
                    Object(u.jsx)(_, {
                      name: 'name',
                      label: 'Name',
                      type: 'text',
                      placeholder: 'Enter product name',
                      required: !0,
                    }),
                    Object(u.jsx)(_, {
                      name: 'unitCost',
                      label: 'Unit cost',
                      type: 'number',
                      placeholder: 'Enter product unit cost',
                      required: !0,
                    }),
                    Object(u.jsx)(_, {
                      name: 'unitPrice',
                      label: 'Unit price',
                      type: 'number',
                      placeholder: 'Enter product unit price',
                      required: !0,
                    }),
                    Object(u.jsx)(_, {
                      name: 'store',
                      label: 'Store',
                      type: 'number',
                      placeholder: 'Enter number of items in store',
                      required: !0,
                    }),
                    Object(u.jsx)(_, {
                      name: 'counter',
                      label: 'Counter',
                      type: 'number',
                      placeholder: 'Enter number of items in counter',
                      required: !0,
                    }),
                    Object(u.jsx)(H, {
                      name: 'categoryId',
                      label: 'Select category',
                      options: p,
                      required: !0,
                      children: Object(u.jsx)('option', {
                        value: '',
                        children: 'Select a category',
                      }),
                    }),
                    Object(u.jsx)(z, {
                      name: 'description',
                      label: 'Description',
                      placeholder: 'Enter a description for the product',
                    }),
                    Object(u.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-primary rounded-0 me-2 mt-3',
                      disabled: e.isSubmitting,
                      children: e.isSubmitting
                        ? Object(u.jsx)(U, { text: 'Adding' })
                        : 'Add',
                    }),
                  ],
                }),
              });
            },
          });
          return Object(u.jsx)(J, {
            title: 'Add Product',
            message: r,
            setMessage: s,
            cardBody: m,
          });
        },
        le = function (e) {
          var t,
            a,
            r = e.match.params.productId,
            s = Object(n.useState)(null),
            c = Object(d.a)(s, 2),
            i = c[0],
            l = c[1],
            b = ae(r),
            p = re(),
            m = Object(d.a)(p, 1)[0],
            j = se(),
            g = Object(d.a)(j, 1)[0],
            O = y('?limit=all'),
            f = Object(n.useMemo)(
              function () {
                return O.isSuccess && O.data.categories
                  ? O.data.categories.map(function (e) {
                      return { value: e.id, label: e.name };
                    })
                  : [{ value: '', label: 'No results found' }];
              },
              [
                O.isSuccess,
                null === (t = O.data) || void 0 === t ? void 0 : t.categories,
              ]
            ),
            x = Object(n.useMemo)(
              function () {
                if (b.isSuccess && b.data.product) {
                  var e = Object(q.a)({}, b.data.product);
                  return null === e.description && (e.description = ''), e;
                }
                return {
                  name: '',
                  unitCost: '',
                  unitPrice: '',
                  store: '',
                  counter: '',
                  description: '',
                  categoryId: '',
                };
              },
              [
                b.isSuccess,
                null === (a = b.data) || void 0 === a ? void 0 : a.product,
              ]
            ),
            S = Object(o.f)();
          Object(n.useEffect)(
            function () {
              (null === i || void 0 === i ? void 0 : i.type) &&
                (null === i || void 0 === i ? void 0 : i.message) &&
                window.scrollTo(0, 0);
            },
            [
              null === i || void 0 === i ? void 0 : i.type,
              null === i || void 0 === i ? void 0 : i.message,
            ]
          );
          var k = Object(n.useCallback)(
              Object(h.a)(
                v.a.mark(function e() {
                  var t, a, n, s;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!r.length) {
                              e.next = 16;
                              break;
                            }
                            return (e.prev = 1), (e.next = 4), g(r).unwrap();
                          case 4:
                            (t = e.sent),
                              (a = t.message),
                              (n = t.error),
                              (s = t.invalidData),
                              a &&
                                S.push({
                                  pathname: '/products',
                                  state: {
                                    message: { type: 'success', message: a },
                                  },
                                }),
                              n && l({ type: 'danger', message: n }),
                              s && l({ type: 'danger', message: s.id }),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(1)),
                              l({ type: 'danger', message: e.t0.message });
                          case 16:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 13]]
                  );
                })
              ),
              [r, S, g]
            ),
            N = Object(u.jsx)(L.a, {
              enableReinitialize: !0,
              initialValues: x,
              validationSchema: oe,
              onSubmit: (function () {
                var e = Object(h.a)(
                  v.a.mark(function e(t, a) {
                    var n, r, s, c, i;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                '' === t.description && delete t.description,
                                (e.prev = 1),
                                (e.next = 4),
                                m(t).unwrap()
                              );
                            case 4:
                              (n = e.sent),
                                (r = n.product),
                                (s = n.error),
                                (c = n.invalidData),
                                a.setSubmitting(!1),
                                r &&
                                  ((i = {
                                    type: 'success',
                                    message: 'Product updated successfully',
                                  }),
                                  S.push({
                                    pathname: '/products',
                                    state: { message: i },
                                  })),
                                s && l({ type: 'danger', message: s }),
                                c &&
                                  (a.setErrors(c),
                                  l({
                                    type: 'danger',
                                    message: 'Please correct the errors below',
                                  })),
                                (e.next = 17);
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e.catch(1)),
                                l({ type: 'danger', message: e.t0.message });
                            case 17:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 14]]
                    );
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              children: function (e) {
                return Object(u.jsx)(u.Fragment, {
                  children: b.isFetching
                    ? Object(u.jsx)(M, {})
                    : Object(u.jsxs)('form', {
                        onSubmit: e.handleSubmit,
                        children: [
                          Object(u.jsx)(_, {
                            name: 'name',
                            label: 'Name',
                            type: 'text',
                            placeholder: 'Enter product name',
                            required: !0,
                          }),
                          Object(u.jsx)(_, {
                            name: 'unitCost',
                            label: 'Unit cost',
                            type: 'number',
                            placeholder: 'Enter product unit cost',
                            required: !0,
                          }),
                          Object(u.jsx)(_, {
                            name: 'unitPrice',
                            label: 'Unit price',
                            type: 'number',
                            placeholder: 'Enter product unit price',
                            required: !0,
                          }),
                          Object(u.jsx)(_, {
                            name: 'store',
                            label: 'Store',
                            type: 'number',
                            placeholder: 'Enter number of items in store',
                            required: !0,
                          }),
                          Object(u.jsx)(_, {
                            name: 'counter',
                            label: 'Counter',
                            type: 'number',
                            placeholder: 'Enter number of items in counter',
                            required: !0,
                          }),
                          Object(u.jsx)(H, {
                            name: 'categoryId',
                            label: 'Select category',
                            options: f,
                            required: !0,
                            children: Object(u.jsx)('option', {
                              value: '',
                              children: 'Select a category',
                            }),
                          }),
                          Object(u.jsx)(z, {
                            name: 'description',
                            label: 'Description',
                          }),
                          Object(u.jsx)('button', {
                            type: 'submit',
                            className: 'btn btn-primary rounded-0 me-2 mt-3',
                            disabled: e.isSubmitting,
                            children: e.isSubmitting
                              ? Object(u.jsx)(U, { text: 'Updating' })
                              : 'Update',
                          }),
                          Object(u.jsx)('button', {
                            type: 'button',
                            className: 'btn btn-danger rounded-0 mt-3',
                            'data-bs-toggle': 'modal',
                            'data-bs-target': '#deleteProduct',
                            children: 'Delete',
                          }),
                        ],
                      }),
                });
              },
            });
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(J, {
                title: 'Edit Product',
                message: i,
                setMessage: l,
                cardBody: N,
              }),
              Object(u.jsx)(T, {
                id: 'deleteProduct',
                label: 'deleteProductLabel',
                title: 'Delete Product',
                body: 'Are you sure you want to delete this product? This action cannot be undone.',
                handleAction: k,
              }),
            ],
          });
        },
        de = f.injectEndpoints({
          endpoints: function (e) {
            return {
              getPurchases: e.query({
                query: function (e) {
                  return {
                    url: e && e.length ? '/purchases'.concat(e) : '/purchases',
                    validateStatus: function (e, t) {
                      return (
                        !!(null === t || void 0 === t ? void 0 : t.error) ||
                        e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return (null === e || void 0 === e ? void 0 : e.purchases)
                    ? ['Purchase'].concat(
                        Object(g.a)(
                          e.purchases.map(function (e) {
                            return { type: 'Purchase', id: e.id };
                          })
                        )
                      )
                    : ['Purchase'];
                },
              }),
              getPurchase: e.query({
                query: function (e) {
                  return {
                    url: '/purchases/'.concat(e),
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return [{ type: 'Purchase', id: a }];
                },
              }),
              addNewPurchase: e.mutation({
                query: function (e) {
                  return {
                    url: '/purchases',
                    method: 'POST',
                    body: e,
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Purchase'],
              }),
              editPurchase: e.mutation({
                query: function (e) {
                  return {
                    url: '/purchases',
                    method: 'PATCH',
                    body: e,
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: function (e, t, a) {
                  return [{ type: 'Purchase', id: a.id }];
                },
              }),
              destroyPurchase: e.mutation({
                query: function (e) {
                  return {
                    url: '/purchases/'.concat(e),
                    method: 'DELETE',
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Purchase'],
              }),
            };
          },
        }),
        be = de.useGetPurchasesQuery,
        pe = de.useGetPurchaseQuery,
        me = de.useAddNewPurchaseMutation,
        je = de.useEditPurchaseMutation,
        ve = de.useDestroyPurchaseMutation,
        he = function () {
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(_, {
                name: 'product',
                label: 'Product',
                type: 'search',
                placeholder: 'Enter product name',
                inline: !0,
                validation: !1,
              }),
              Object(u.jsx)(_, {
                name: 'supplier',
                label: 'Supplier',
                type: 'search',
                placeholder: 'Enter supplier name',
                inline: !0,
                validation: !1,
              }),
            ],
          });
        },
        ge = r.a.memo(function () {
          var e,
            t = Object(n.useState)(''),
            a = Object(d.a)(t, 2),
            r = a[0],
            s = a[1],
            c = Object(n.useState)(null),
            i = Object(d.a)(c, 2),
            o = i[0],
            l = i[1],
            b = be(r),
            p = ve(),
            m = Object(d.a)(p, 1)[0],
            j = Object(n.useMemo)(function () {
              return [
                {
                  name: '',
                  accessor: 'id',
                  link: '/purchases/:id',
                  callback: function (e) {
                    return 'Edit';
                  },
                },
                {
                  name: 'Product',
                  accessor: 'product',
                  link: '/products/:productId',
                  callback: function (e) {
                    return e.name;
                  },
                },
                {
                  name: 'Supplier',
                  accessor: 'supplier',
                  link: '/suppliers/:supplierId',
                  callback: function (e) {
                    return e.name;
                  },
                },
                { name: 'Quantity', accessor: 'quantity' },
                { name: 'Unit cost', accessor: 'unitCost' },
                { name: 'Unit price', accessor: 'unitPrice' },
                { name: 'Location', accessor: 'location' },
              ];
            }, []),
            g = b.isSuccess ? (b.data.purchases ? b.data.purchases : []) : null;
          Object(n.useEffect)(
            function () {
              var e;
              (null === (e = b.data) || void 0 === e ? void 0 : e.error) &&
                l({ type: 'danger', message: b.data.error });
            },
            [null === (e = b.data) || void 0 === e ? void 0 : e.error]
          );
          var O = Object(n.useCallback)(function (e) {
              e.length && s(e);
            }, []),
            f = Object(n.useCallback)(
              (function () {
                var e = Object(h.a)(
                  v.a.mark(function e(t) {
                    var a, n, r, s;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t.length) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (e.prev = 1), (e.next = 4), m(t.join()).unwrap()
                              );
                            case 4:
                              (a = e.sent),
                                (n = a.message),
                                (r = a.error),
                                (s = a.invalidData),
                                n && l({ type: 'success', message: n }),
                                r && l({ type: 'danger', message: r }),
                                s && l({ type: 'danger', message: s.id }),
                                (e.next = 16);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(1)),
                                l({ type: 'danger', message: e.t0.message });
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 13]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [m]
            );
          return Object(u.jsx)(V, {
            cols: j,
            data: g,
            pagination:
              b.isSuccess && b.data.pagination
                ? b.data.pagination
                : { count: 0 },
            title: 'Purchases',
            message: o,
            setMessage: l,
            createItemLink: '/purchases/create',
            handleQuery: O,
            destroyChecked: f,
            searchFormInitialValues: { product: '', supplier: '' },
            SearchFormInputs: he,
          });
        }),
        Oe = f.injectEndpoints({
          endpoints: function (e) {
            return {
              getSuppliers: e.query({
                query: function (e) {
                  return {
                    url: e && e.length ? '/suppliers'.concat(e) : '/suppliers',
                    validateStatus: function (e, t) {
                      return (
                        !!(null === t || void 0 === t ? void 0 : t.error) ||
                        e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return (null === e || void 0 === e ? void 0 : e.suppliers)
                    ? ['Supplier'].concat(
                        Object(g.a)(
                          e.suppliers.map(function (e) {
                            return { type: 'Supplier', id: e.id };
                          })
                        )
                      )
                    : ['Supplier'];
                },
              }),
              getSupplier: e.query({
                query: function (e) {
                  return {
                    url: '/suppliers/'.concat(e),
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return [{ type: 'Supplier', id: a }];
                },
              }),
              addNewSupplier: e.mutation({
                query: function (e) {
                  return {
                    url: '/suppliers',
                    method: 'POST',
                    body: e,
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Supplier'],
              }),
              editSupplier: e.mutation({
                query: function (e) {
                  return {
                    url: '/suppliers',
                    method: 'PATCH',
                    body: e,
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: function (e, t, a) {
                  return [{ type: 'Supplier', id: a.id }];
                },
              }),
              destroySupplier: e.mutation({
                query: function (e) {
                  return {
                    url: '/suppliers/'.concat(e),
                    method: 'DELETE',
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Supplier'],
              }),
            };
          },
        }),
        fe = Oe.useGetSuppliersQuery,
        xe = Oe.useGetSupplierQuery,
        ye = Oe.useAddNewSupplierMutation,
        Se = Oe.useEditSupplierMutation,
        ke = Oe.useDestroySupplierMutation,
        Ne = K.c({
          supplierId: K.d()
            .typeError('Supplier is required')
            .required('Supplier is required'),
          productId: K.d()
            .typeError('Product is required')
            .required('Product is required'),
          quantity: K.b()
            .typeError('Quantity is required')
            .required('Quantity is required')
            .positive('Quantity must be greater than 0')
            .integer('Quantity must be an integer'),
          unitCost: K.b()
            .typeError('Unit cost is required')
            .required('Unit cost is required')
            .positive('Unit cost must be greater than 0')
            .test(
              'maxTwoDecimalPoints',
              'Unit cost must not exceed 2 decimal points',
              function (e) {
                return /^\d+(\.\d{1,2})?$/.test(e);
              }
            ),
          unitPrice: K.b()
            .typeError('Unit price is required')
            .required('Unit price is required')
            .positive('Unit price must be greater than 0')
            .test(
              'maxTwoDecimalPoints',
              'Unit price must not exceed 2 decimal points',
              function (e) {
                return /^\d+(\.\d{1,2})?$/.test(e);
              }
            )
            .test(
              'notLessThanUnitCost',
              'Unit price cannot be less than unit cost',
              function (e) {
                var t = parseFloat(this.parent.unitCost);
                return !t || parseFloat(e) >= t;
              }
            ),
          location: K.a().oneOf(
            ['store', 'counter'],
            "Valid location are 'store' or 'counter'"
          ),
        }),
        we = function () {
          var e,
            t,
            a = Object(n.useState)(null),
            r = Object(d.a)(a, 2),
            s = r[0],
            c = r[1],
            i = me(),
            l = Object(d.a)(i, 1)[0],
            b = te('?limit=all'),
            p = fe('?limit=all'),
            m = Object(n.useMemo)(
              function () {
                return b.isSuccess && b.data.products
                  ? b.data.products.map(function (e) {
                      return { value: e.id, label: e.name };
                    })
                  : [{ value: '', label: 'No results found' }];
              },
              [
                b.isSuccess,
                null === (e = b.data) || void 0 === e ? void 0 : e.products,
              ]
            ),
            j = Object(n.useMemo)(
              function () {
                return p.isSuccess && p.data.suppliers
                  ? p.data.suppliers.map(function (e) {
                      return { value: e.id, label: e.name };
                    })
                  : [{ value: '', label: 'No results found' }];
              },
              [
                p.isSuccess,
                null === (t = p.data) || void 0 === t ? void 0 : t.suppliers,
              ]
            ),
            g = Object(o.f)();
          Object(n.useEffect)(
            function () {
              (null === s || void 0 === s ? void 0 : s.type) &&
                (null === s || void 0 === s ? void 0 : s.message) &&
                window.scrollTo(0, 0);
            },
            [
              null === s || void 0 === s ? void 0 : s.type,
              null === s || void 0 === s ? void 0 : s.message,
            ]
          );
          var O = Object(u.jsx)(L.a, {
            initialValues: {
              supplierId: '',
              productId: '',
              quantity: '',
              unitCost: '',
              unitPrice: '',
              location: '',
            },
            validationSchema: Ne,
            onSubmit: (function () {
              var e = Object(h.a)(
                v.a.mark(function e(t, a) {
                  var n, r, s, i, o;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), l(t).unwrap();
                          case 3:
                            (n = e.sent),
                              (r = n.purchase),
                              (s = n.error),
                              (i = n.invalidData),
                              a.setSubmitting(!1),
                              r &&
                                ((o = {
                                  type: 'success',
                                  message: 'Purchase created successfully',
                                }),
                                g.push({
                                  pathname: '/purchases',
                                  state: { message: o },
                                })),
                              s && c({ type: 'danger', message: s }),
                              i &&
                                (a.setErrors(i),
                                c({
                                  type: 'danger',
                                  message: 'Please correct the errors below',
                                })),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(0)),
                              c({ type: 'danger', message: e.t0.message });
                          case 16:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 13]]
                  );
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            children: function (e) {
              return Object(u.jsx)(u.Fragment, {
                children: Object(u.jsxs)('form', {
                  onSubmit: e.handleSubmit,
                  children: [
                    Object(u.jsx)(H, {
                      name: 'supplierId',
                      label: 'Select supplier',
                      options: j,
                      required: !0,
                      children: Object(u.jsx)('option', {
                        value: '',
                        children: 'Select a supplier',
                      }),
                    }),
                    Object(u.jsx)(H, {
                      name: 'productId',
                      label: 'Select product',
                      options: m,
                      required: !0,
                      children: Object(u.jsx)('option', {
                        value: '',
                        children: 'Select a product',
                      }),
                    }),
                    Object(u.jsx)(_, {
                      name: 'quantity',
                      label: 'Quantity',
                      type: 'number',
                      placeholder: 'Enter quantity',
                      required: !0,
                    }),
                    Object(u.jsx)(_, {
                      name: 'unitCost',
                      label: 'Unit cost',
                      type: 'number',
                      placeholder: 'Enter product unit cost',
                      required: !0,
                    }),
                    Object(u.jsx)(_, {
                      name: 'unitPrice',
                      label: 'Unit price',
                      type: 'number',
                      placeholder: 'Enter product unit price',
                      required: !0,
                    }),
                    Object(u.jsxs)(H, {
                      name: 'location',
                      label: 'Select location',
                      required: !0,
                      children: [
                        Object(u.jsx)('option', {
                          value: '',
                          children: 'Select a location',
                        }),
                        Object(u.jsx)('option', {
                          value: 'store',
                          children: 'Store',
                        }),
                        Object(u.jsx)('option', {
                          value: 'counter',
                          children: 'Counter',
                        }),
                      ],
                    }),
                    Object(u.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-primary rounded-0 me-2 mt-3',
                      disabled: e.isSubmitting,
                      children: e.isSubmitting
                        ? Object(u.jsx)(U, { text: 'Adding' })
                        : 'Add',
                    }),
                  ],
                }),
              });
            },
          });
          return Object(u.jsx)(J, {
            title: 'Add Purchase',
            message: s,
            setMessage: c,
            cardBody: O,
          });
        },
        qe = function (e) {
          var t,
            a,
            r,
            s = e.match.params.purchaseId,
            c = Object(n.useState)(null),
            i = Object(d.a)(c, 2),
            l = i[0],
            b = i[1],
            p = pe(s),
            m = je(),
            j = Object(d.a)(m, 1)[0],
            g = ve(),
            O = Object(d.a)(g, 1)[0],
            f = te('?limit=all'),
            x = fe('?limit=all'),
            y = Object(n.useMemo)(
              function () {
                return f.isSuccess && f.data.products
                  ? f.data.products.map(function (e) {
                      return { value: e.id, label: e.name };
                    })
                  : [{ value: '', label: 'No results found' }];
              },
              [
                f.isSuccess,
                null === (t = f.data) || void 0 === t ? void 0 : t.products,
              ]
            ),
            S = Object(n.useMemo)(
              function () {
                return x.isSuccess && x.data.suppliers
                  ? x.data.suppliers.map(function (e) {
                      return { value: e.id, label: e.name };
                    })
                  : [{ value: '', label: 'No results found' }];
              },
              [
                x.isSuccess,
                null === (a = x.data) || void 0 === a ? void 0 : a.suppliers,
              ]
            ),
            k = Object(n.useMemo)(
              function () {
                return p.isSuccess && p.data.purchase
                  ? Object(q.a)({}, p.data.purchase)
                  : {
                      supplierId: '',
                      productId: '',
                      quantity: '',
                      unitCost: '',
                      unitPrice: '',
                      location: '',
                    };
              },
              [
                p.isSuccess,
                null === (r = p.data) || void 0 === r ? void 0 : r.purchase,
              ]
            ),
            N = Object(o.f)();
          Object(n.useEffect)(
            function () {
              (null === l || void 0 === l ? void 0 : l.type) &&
                (null === l || void 0 === l ? void 0 : l.message) &&
                window.scrollTo(0, 0);
            },
            [
              null === l || void 0 === l ? void 0 : l.type,
              null === l || void 0 === l ? void 0 : l.message,
            ]
          );
          var w = Object(n.useCallback)(
              Object(h.a)(
                v.a.mark(function e() {
                  var t, a, n, r;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!s.length) {
                              e.next = 16;
                              break;
                            }
                            return (e.prev = 1), (e.next = 4), O(s).unwrap();
                          case 4:
                            (t = e.sent),
                              (a = t.message),
                              (n = t.error),
                              (r = t.invalidData),
                              a &&
                                N.push({
                                  pathname: '/purchases',
                                  state: {
                                    message: { type: 'success', message: a },
                                  },
                                }),
                              n && b({ type: 'danger', message: n }),
                              r && b({ type: 'danger', message: r.id }),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(1)),
                              b({ type: 'danger', message: e.t0.message });
                          case 16:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 13]]
                  );
                })
              ),
              [s, N, O]
            ),
            P = Object(u.jsx)(L.a, {
              enableReinitialize: !0,
              initialValues: k,
              validationSchema: Ne,
              onSubmit: (function () {
                var e = Object(h.a)(
                  v.a.mark(function e(t, a) {
                    var n, r, s, c, i;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), j(t).unwrap();
                            case 3:
                              (n = e.sent),
                                (r = n.purchase),
                                (s = n.error),
                                (c = n.invalidData),
                                a.setSubmitting(!1),
                                r &&
                                  ((i = {
                                    type: 'success',
                                    message: 'Purchase updated successfully',
                                  }),
                                  N.push({
                                    pathname: '/purchases',
                                    state: { message: i },
                                  })),
                                s && b({ type: 'danger', message: s }),
                                c &&
                                  (a.setErrors(c),
                                  b({
                                    type: 'danger',
                                    message: 'Please correct the errors below',
                                  })),
                                (e.next = 16);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(0)),
                                b({ type: 'danger', message: e.t0.message });
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 13]]
                    );
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              children: function (e) {
                return Object(u.jsx)(u.Fragment, {
                  children: p.isFetching
                    ? Object(u.jsx)(M, {})
                    : Object(u.jsxs)('form', {
                        onSubmit: e.handleSubmit,
                        children: [
                          Object(u.jsx)(H, {
                            name: 'supplierId',
                            label: 'Select supplier',
                            options: S,
                            required: !0,
                            children: Object(u.jsx)('option', {
                              value: '',
                              children: 'Select a supplier',
                            }),
                          }),
                          Object(u.jsx)(H, {
                            name: 'productId',
                            label: 'Select product',
                            options: y,
                            required: !0,
                            children: Object(u.jsx)('option', {
                              value: '',
                              children: 'Select a product',
                            }),
                          }),
                          Object(u.jsx)(_, {
                            name: 'quantity',
                            label: 'Quantity',
                            type: 'number',
                            placeholder: 'Enter quantity',
                            required: !0,
                          }),
                          Object(u.jsx)(_, {
                            name: 'unitCost',
                            label: 'Unit cost',
                            type: 'number',
                            placeholder: 'Enter product unit cost',
                            required: !0,
                          }),
                          Object(u.jsx)(_, {
                            name: 'unitPrice',
                            label: 'Unit price',
                            type: 'number',
                            placeholder: 'Enter product unit price',
                            required: !0,
                          }),
                          Object(u.jsxs)(H, {
                            name: 'location',
                            label: 'Select location',
                            required: !0,
                            children: [
                              Object(u.jsx)('option', {
                                value: '',
                                children: 'Select a location',
                              }),
                              Object(u.jsx)('option', {
                                value: 'store',
                                children: 'Store',
                              }),
                              Object(u.jsx)('option', {
                                value: 'counter',
                                children: 'Counter',
                              }),
                            ],
                          }),
                          Object(u.jsx)('button', {
                            type: 'submit',
                            className: 'btn btn-primary rounded-0 me-2 mt-3',
                            disabled: e.isSubmitting,
                            children: e.isSubmitting
                              ? Object(u.jsx)(U, { text: 'Updating' })
                              : 'Update',
                          }),
                          Object(u.jsx)('button', {
                            type: 'button',
                            className: 'btn btn-danger rounded-0 mt-3',
                            'data-bs-toggle': 'modal',
                            'data-bs-target': '#deletePurchase',
                            children: 'Delete',
                          }),
                        ],
                      }),
                });
              },
            });
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(J, {
                title: 'Edit Purchase',
                message: l,
                setMessage: b,
                cardBody: P,
              }),
              Object(u.jsx)(T, {
                id: 'deletePurchase',
                label: 'deletePurchaseLabel',
                title: 'Delete Purchase',
                body: 'Are you sure you want to delete this purchase? This action cannot be undone.',
                handleAction: w,
              }),
            ],
          });
        },
        Pe = f.injectEndpoints({
          endpoints: function (e) {
            return {
              getSales: e.query({
                query: function (e) {
                  return {
                    url: e && e.length ? '/sales'.concat(e) : '/sales',
                    validateStatus: function (e, t) {
                      return (
                        !!(null === t || void 0 === t ? void 0 : t.error) ||
                        e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return (null === e || void 0 === e ? void 0 : e.sales)
                    ? ['Sale'].concat(
                        Object(g.a)(
                          e.sales.map(function (e) {
                            return { type: 'Sale', id: e.id };
                          })
                        )
                      )
                    : ['Sale'];
                },
              }),
              getSale: e.query({
                query: function (e) {
                  return {
                    url: '/sales/'.concat(e),
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return [{ type: 'Sale', id: a }];
                },
              }),
              addNewSale: e.mutation({
                query: function (e) {
                  return {
                    url: '/sales',
                    method: 'POST',
                    body: e,
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Sale'],
              }),
              editSale: e.mutation({
                query: function (e) {
                  return {
                    url: '/sales',
                    method: 'PATCH',
                    body: e,
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: function (e, t, a) {
                  return [{ type: 'Sale', id: a.id }];
                },
              }),
              cancelSale: e.mutation({
                query: function (e) {
                  return {
                    url: '/sales/'.concat(e, '/cancel'),
                    method: 'DELETE',
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Sale'],
              }),
              destroySale: e.mutation({
                query: function (e) {
                  return {
                    url: '/sales/'.concat(e),
                    method: 'DELETE',
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Sale'],
              }),
            };
          },
        }),
        Ee = Pe.useGetSalesQuery,
        Ce = Pe.useGetSaleQuery,
        Te = Pe.useAddNewSaleMutation,
        De = Pe.useEditSaleMutation,
        Me = Pe.useCancelSaleMutation,
        Ie = Pe.useDestroySaleMutation,
        Fe = function () {
          return Object(u.jsx)(_, {
            name: 'product',
            label: 'Product',
            type: 'search',
            placeholder: 'Enter product name',
            inline: !0,
            validation: !1,
          });
        },
        Ae = r.a.memo(function () {
          var e,
            t = Object(n.useState)(''),
            a = Object(d.a)(t, 2),
            r = a[0],
            s = a[1],
            c = Object(n.useState)(null),
            i = Object(d.a)(c, 2),
            o = i[0],
            l = i[1],
            b = Ee(r),
            p = Ie(),
            m = Object(d.a)(p, 1)[0],
            j = Object(n.useMemo)(function () {
              return [
                {
                  name: '',
                  accessor: 'id',
                  link: '/sales/:id',
                  callback: function (e) {
                    return 'Edit';
                  },
                },
                {
                  name: 'Product',
                  accessor: 'product',
                  link: '/products/:productId',
                  callback: function (e) {
                    return e.name;
                  },
                },
                { name: 'Quantity', accessor: 'quantity' },
              ];
            }, []),
            g = b.isSuccess ? (b.data.sales ? b.data.sales : []) : null;
          Object(n.useEffect)(
            function () {
              var e;
              (null === (e = b.data) || void 0 === e ? void 0 : e.error) &&
                l({ type: 'danger', message: b.data.error });
            },
            [null === (e = b.data) || void 0 === e ? void 0 : e.error]
          );
          var O = Object(n.useCallback)(function (e) {
              e.length && s(e);
            }, []),
            f = Object(n.useCallback)(
              (function () {
                var e = Object(h.a)(
                  v.a.mark(function e(t) {
                    var a, n, r, s;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t.length) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (e.prev = 1), (e.next = 4), m(t.join()).unwrap()
                              );
                            case 4:
                              (a = e.sent),
                                (n = a.message),
                                (r = a.error),
                                (s = a.invalidData),
                                n && l({ type: 'success', message: n }),
                                r && l({ type: 'danger', message: r }),
                                s && l({ type: 'danger', message: s.id }),
                                (e.next = 16);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(1)),
                                l({ type: 'danger', message: e.t0.message });
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 13]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [m]
            );
          return Object(u.jsx)(V, {
            cols: j,
            data: g,
            pagination:
              b.isSuccess && b.data.pagination
                ? b.data.pagination
                : { count: 0 },
            title: 'Sales',
            message: o,
            setMessage: l,
            createItemLink: '/sales/create',
            handleQuery: O,
            destroyChecked: f,
            searchFormInitialValues: { product: '' },
            SearchFormInputs: Fe,
          });
        }),
        Le = K.c({
          productId: K.d()
            .typeError('Product is required')
            .required('Product is required'),
          quantity: K.b()
            .typeError('Please provide a valid quantity')
            .required('Quantity is required')
            .positive('Quantity cannot be negative')
            .integer('Quantity must be an integer'),
        }),
        Ue = function () {
          var e,
            t = Object(n.useState)(null),
            a = Object(d.a)(t, 2),
            r = a[0],
            s = a[1],
            c = Te(),
            i = Object(d.a)(c, 1)[0],
            l = te('?limit=all'),
            b = Object(n.useMemo)(
              function () {
                return l.isSuccess && l.data.products
                  ? l.data.products.map(function (e) {
                      return { value: e.id, label: e.name };
                    })
                  : [{ value: '', label: 'No results found' }];
              },
              [
                l.isSuccess,
                null === (e = l.data) || void 0 === e ? void 0 : e.products,
              ]
            ),
            p = Object(o.f)();
          Object(n.useEffect)(
            function () {
              (null === r || void 0 === r ? void 0 : r.type) &&
                (null === r || void 0 === r ? void 0 : r.message) &&
                window.scrollTo(0, 0);
            },
            [
              null === r || void 0 === r ? void 0 : r.type,
              null === r || void 0 === r ? void 0 : r.message,
            ]
          );
          var m = Object(u.jsx)(L.a, {
            initialValues: { productId: '', quantity: '' },
            validationSchema: Le,
            onSubmit: (function () {
              var e = Object(h.a)(
                v.a.mark(function e(t, a) {
                  var n, r, c, o, u;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), i(t).unwrap();
                          case 3:
                            (n = e.sent),
                              (r = n.sale),
                              (c = n.error),
                              (o = n.invalidData),
                              a.setSubmitting(!1),
                              r &&
                                ((u = {
                                  type: 'success',
                                  message: 'Sale created successfully',
                                }),
                                p.push({
                                  pathname: '/sales',
                                  state: { message: u },
                                })),
                              c && s({ type: 'danger', message: c }),
                              o &&
                                (a.setErrors(o),
                                s({
                                  type: 'danger',
                                  message: 'Please correct the errors below',
                                })),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(0)),
                              s({ type: 'danger', message: e.t0.message });
                          case 16:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 13]]
                  );
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            children: function (e) {
              return Object(u.jsx)(u.Fragment, {
                children: Object(u.jsxs)('form', {
                  onSubmit: e.handleSubmit,
                  children: [
                    Object(u.jsx)(H, {
                      name: 'productId',
                      label: 'Select product',
                      options: b,
                      required: !0,
                      children: Object(u.jsx)('option', {
                        value: '',
                        children: 'Select a product',
                      }),
                    }),
                    Object(u.jsx)(_, {
                      name: 'quantity',
                      label: 'Quantity',
                      type: 'number',
                      placeholder: 'Enter quantity',
                      required: !0,
                    }),
                    Object(u.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-primary rounded-0 me-2 mt-3',
                      disabled: e.isSubmitting,
                      children: e.isSubmitting
                        ? Object(u.jsx)(U, { text: 'Adding' })
                        : 'Add',
                    }),
                  ],
                }),
              });
            },
          });
          return Object(u.jsx)(J, {
            title: 'Add Sale',
            message: r,
            setMessage: s,
            cardBody: m,
          });
        },
        Qe = function (e) {
          var t,
            a,
            r = e.match.params.saleId,
            s = Object(n.useState)(null),
            c = Object(d.a)(s, 2),
            i = c[0],
            l = c[1],
            b = Ce(r),
            p = De(),
            m = Object(d.a)(p, 1)[0],
            j = Me(),
            g = Object(d.a)(j, 1)[0],
            O = Ie(),
            f = Object(d.a)(O, 1)[0],
            x = te('?limit=all'),
            y = Object(n.useMemo)(
              function () {
                return x.isSuccess && x.data.products
                  ? x.data.products.map(function (e) {
                      return { value: e.id, label: e.name };
                    })
                  : [{ value: '', label: 'No results found' }];
              },
              [
                x.isSuccess,
                null === (t = x.data) || void 0 === t ? void 0 : t.products,
              ]
            ),
            S = Object(n.useMemo)(
              function () {
                return b.isSuccess && b.data.sale
                  ? Object(q.a)({}, b.data.sale)
                  : { productId: '', quantity: '' };
              },
              [
                b.isSuccess,
                null === (a = b.data) || void 0 === a ? void 0 : a.sale,
              ]
            ),
            k = Object(o.f)();
          Object(n.useEffect)(
            function () {
              (null === i || void 0 === i ? void 0 : i.type) &&
                (null === i || void 0 === i ? void 0 : i.message) &&
                window.scrollTo(0, 0);
            },
            [
              null === i || void 0 === i ? void 0 : i.type,
              null === i || void 0 === i ? void 0 : i.message,
            ]
          );
          var N = Object(n.useCallback)(
              Object(h.a)(
                v.a.mark(function e() {
                  var t, a, n, s;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!r.length) {
                              e.next = 16;
                              break;
                            }
                            return (e.prev = 1), (e.next = 4), f(r).unwrap();
                          case 4:
                            (t = e.sent),
                              (a = t.message),
                              (n = t.error),
                              (s = t.invalidData),
                              a &&
                                k.push({
                                  pathname: '/sales',
                                  state: {
                                    message: { type: 'success', message: a },
                                  },
                                }),
                              n && l({ type: 'danger', message: n }),
                              s && l({ type: 'danger', message: s.id }),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(1)),
                              l({ type: 'danger', message: e.t0.message });
                          case 16:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 13]]
                  );
                })
              ),
              [r, k, f]
            ),
            w = Object(n.useCallback)(
              Object(h.a)(
                v.a.mark(function e() {
                  var t, a, n, s;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!r.length) {
                              e.next = 17;
                              break;
                            }
                            return (e.prev = 1), (e.next = 4), g(r).unwrap();
                          case 4:
                            (t = e.sent),
                              (a = t.message),
                              (n = t.error),
                              (s = t.invalidData),
                              a &&
                                k.push({
                                  pathname: '/sales',
                                  state: {
                                    message: { type: 'success', message: a },
                                  },
                                }),
                              n && l({ type: 'danger', message: n }),
                              s && l({ type: 'danger', message: s.id }),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(1)),
                              l({ type: 'danger', message: e.t0.message });
                          case 16:
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 13]]
                  );
                })
              ),
              [r, k, g]
            ),
            P = Object(u.jsx)(L.a, {
              enableReinitialize: !0,
              initialValues: S,
              validationSchema: Le,
              onSubmit: (function () {
                var e = Object(h.a)(
                  v.a.mark(function e(t, a) {
                    var n, r, s, c, i;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), m(t).unwrap();
                            case 3:
                              (n = e.sent),
                                (r = n.sale),
                                (s = n.error),
                                (c = n.invalidData),
                                a.setSubmitting(!1),
                                r &&
                                  ((i = {
                                    type: 'success',
                                    message: 'Sale updated successfully',
                                  }),
                                  k.push({
                                    pathname: '/sales',
                                    state: { message: i },
                                  })),
                                s && l({ type: 'danger', message: s }),
                                c &&
                                  (a.setErrors(c),
                                  l({
                                    type: 'danger',
                                    message: 'Please correct the errors below',
                                  })),
                                (e.next = 16);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(0)),
                                l({ type: 'danger', message: e.t0.message });
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 13]]
                    );
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              children: function (e) {
                return Object(u.jsx)(u.Fragment, {
                  children: b.isFetching
                    ? Object(u.jsx)(M, {})
                    : Object(u.jsxs)('form', {
                        onSubmit: e.handleSubmit,
                        children: [
                          Object(u.jsx)(H, {
                            name: 'productId',
                            label: 'Select product',
                            options: y,
                            required: !0,
                            children: Object(u.jsx)('option', {
                              value: '',
                              children: 'Select a product',
                            }),
                          }),
                          Object(u.jsx)(_, {
                            name: 'quantity',
                            label: 'Quantity',
                            type: 'number',
                            placeholder: 'Enter quantity',
                            required: !0,
                          }),
                          Object(u.jsx)('button', {
                            type: 'submit',
                            className: 'btn btn-primary rounded-0 me-2 mt-3',
                            disabled: e.isSubmitting,
                            children: e.isSubmitting
                              ? Object(u.jsx)(U, { text: 'Updating' })
                              : 'Update',
                          }),
                          Object(u.jsx)('button', {
                            type: 'button',
                            className: 'btn btn-danger rounded-0 me-2 mt-3',
                            'data-bs-toggle': 'modal',
                            'data-bs-target': '#cancelSale',
                            children: 'Cancel',
                          }),
                          Object(u.jsx)('button', {
                            type: 'button',
                            className: 'btn btn-danger rounded-0 mt-3',
                            'data-bs-toggle': 'modal',
                            'data-bs-target': '#deleteSale',
                            children: 'Delete',
                          }),
                        ],
                      }),
                });
              },
            });
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(J, {
                title: 'Edit Sale',
                message: i,
                setMessage: l,
                cardBody: P,
              }),
              Object(u.jsx)(T, {
                id: 'deleteSale',
                label: 'deleteSaleLabel',
                title: 'Delete Sale',
                body: 'Are you sure you want to delete this sale? This action cannot be undone.',
                handleAction: N,
              }),
              Object(u.jsx)(T, {
                id: 'cancelSale',
                label: 'cancelSaleLabel',
                title: 'Cancel Sale',
                body: 'Are you sure you want to cancel this sale? This action cannot be undone.',
                handleAction: w,
                actionLabel: 'Cancel',
              }),
            ],
          });
        },
        Ve = function () {
          return Object(u.jsx)(_, {
            name: 'name',
            label: 'Name',
            type: 'search',
            placeholder: 'Enter supplier name',
            inline: !0,
            validation: !1,
          });
        },
        Be = r.a.memo(function () {
          var e,
            t = Object(n.useState)(''),
            a = Object(d.a)(t, 2),
            r = a[0],
            s = a[1],
            c = Object(n.useState)(null),
            i = Object(d.a)(c, 2),
            o = i[0],
            l = i[1],
            b = fe(r),
            p = ke(),
            m = Object(d.a)(p, 1)[0],
            j = Object(n.useMemo)(function () {
              return [
                { name: 'Name', accessor: 'name', link: '/suppliers/:id' },
                { name: 'Phone', accessor: 'phone' },
                { name: 'Email', accessor: 'email' },
              ];
            }, []),
            g = b.isSuccess ? (b.data.suppliers ? b.data.suppliers : []) : null;
          Object(n.useEffect)(
            function () {
              var e;
              (null === (e = b.data) || void 0 === e ? void 0 : e.error) &&
                l({ type: 'danger', message: b.data.error });
            },
            [null === (e = b.data) || void 0 === e ? void 0 : e.error]
          );
          var O = Object(n.useCallback)(function (e) {
              e.length && s(e);
            }, []),
            f = Object(n.useCallback)(
              (function () {
                var e = Object(h.a)(
                  v.a.mark(function e(t) {
                    var a, n, r, s;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t.length) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (e.prev = 1), (e.next = 4), m(t.join()).unwrap()
                              );
                            case 4:
                              (a = e.sent),
                                (n = a.message),
                                (r = a.error),
                                (s = a.invalidData),
                                n && l({ type: 'success', message: n }),
                                r && l({ type: 'danger', message: r }),
                                s && l({ type: 'danger', message: s.id }),
                                (e.next = 16);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(1)),
                                l({ type: 'danger', message: e.t0.message });
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 13]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [m]
            );
          return Object(u.jsx)(V, {
            cols: j,
            data: g,
            pagination:
              b.isSuccess && b.data.pagination
                ? b.data.pagination
                : { count: 0 },
            title: 'Suppliers',
            message: o,
            setMessage: l,
            createItemLink: '/suppliers/create',
            handleQuery: O,
            destroyChecked: f,
            searchFormInitialValues: { name: '' },
            SearchFormInputs: Ve,
          });
        }),
        Re = K.c({
          name: K.d()
            .typeError('Supplier name is required')
            .required('Supplier name is required')
            .min(2, 'Supplier name must be at least 2 characters long')
            .max(50, 'Supplier name must not exceed 20 characters')
            .matches(/^[aA-zZ\s]+$/, 'Supplier name must be alphabetic'),
          phone: K.d()
            .typeError('Phone number is required')
            .required('Phone number is required')
            .min(10, 'Phone number must be 10 characters long')
            .max(10, 'Phone number must be 10 characters long'),
          email: K.d().email('Please provide a valid email address'),
        }),
        Ge = function () {
          var e = Object(n.useState)(null),
            t = Object(d.a)(e, 2),
            a = t[0],
            r = t[1],
            s = ye(),
            c = Object(d.a)(s, 1)[0],
            i = Object(o.f)();
          Object(n.useEffect)(
            function () {
              (null === a || void 0 === a ? void 0 : a.type) &&
                (null === a || void 0 === a ? void 0 : a.message) &&
                window.scrollTo(0, 0);
            },
            [
              null === a || void 0 === a ? void 0 : a.type,
              null === a || void 0 === a ? void 0 : a.message,
            ]
          );
          var l = Object(u.jsx)(L.a, {
            initialValues: { name: '', phone: '', email: '' },
            validationSchema: Re,
            onSubmit: (function () {
              var e = Object(h.a)(
                v.a.mark(function e(t, a) {
                  var n, s, o, u, l;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              '' === t.email && delete t.email,
                              (e.prev = 1),
                              (e.next = 4),
                              c(t).unwrap()
                            );
                          case 4:
                            (n = e.sent),
                              (s = n.supplier),
                              (o = n.error),
                              (u = n.invalidData),
                              a.setSubmitting(!1),
                              s &&
                                ((l = {
                                  type: 'success',
                                  message: 'Supplier created successfully',
                                }),
                                i.push({
                                  pathname: '/suppliers',
                                  state: { message: l },
                                })),
                              o && r({ type: 'danger', message: o }),
                              u &&
                                (a.setErrors(u),
                                r({
                                  type: 'danger',
                                  message: 'Please correct the errors below',
                                })),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(1)),
                              r({ type: 'danger', message: e.t0.message });
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 14]]
                  );
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            children: function (e) {
              return Object(u.jsx)(u.Fragment, {
                children: Object(u.jsxs)('form', {
                  onSubmit: e.handleSubmit,
                  children: [
                    Object(u.jsx)(_, {
                      name: 'name',
                      label: 'Name',
                      type: 'text',
                      placeholder: "Enter supplier's name",
                      required: !0,
                    }),
                    Object(u.jsx)(_, {
                      name: 'phone',
                      label: 'Phone',
                      type: 'text',
                      placeholder: "Enter supplier's phone number",
                      required: !0,
                    }),
                    Object(u.jsx)(_, {
                      name: 'email',
                      label: 'Email',
                      type: 'email',
                      placeholder: "Enter supplier's email",
                    }),
                    Object(u.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-primary rounded-0 me-2 mt-3',
                      disabled: e.isSubmitting,
                      children: e.isSubmitting
                        ? Object(u.jsx)(U, { text: 'Adding' })
                        : 'Add',
                    }),
                  ],
                }),
              });
            },
          });
          return Object(u.jsx)(J, {
            title: 'Add Supplier',
            message: a,
            setMessage: r,
            cardBody: l,
          });
        },
        _e = function (e) {
          var t,
            a = e.match.params.supplierId,
            r = Object(n.useState)(null),
            s = Object(d.a)(r, 2),
            c = s[0],
            i = s[1],
            l = xe(a),
            b = Se(),
            p = Object(d.a)(b, 1)[0],
            m = ke(),
            j = Object(d.a)(m, 1)[0],
            g = Object(n.useMemo)(
              function () {
                return l.isSuccess && l.data.supplier
                  ? Object(q.a)({}, l.data.supplier)
                  : { name: '', phone: '', email: '' };
              },
              [
                l.isSuccess,
                null === (t = l.data) || void 0 === t ? void 0 : t.supplier,
              ]
            ),
            O = Object(o.f)();
          Object(n.useEffect)(
            function () {
              (null === c || void 0 === c ? void 0 : c.type) &&
                (null === c || void 0 === c ? void 0 : c.message) &&
                window.scrollTo(0, 0);
            },
            [
              null === c || void 0 === c ? void 0 : c.type,
              null === c || void 0 === c ? void 0 : c.message,
            ]
          );
          var f = Object(n.useCallback)(
              Object(h.a)(
                v.a.mark(function e() {
                  var t, n, r, s;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!a.length) {
                              e.next = 16;
                              break;
                            }
                            return (e.prev = 1), (e.next = 4), j(a).unwrap();
                          case 4:
                            (t = e.sent),
                              (n = t.message),
                              (r = t.error),
                              (s = t.invalidData),
                              n &&
                                O.push({
                                  pathname: '/suppliers',
                                  state: {
                                    message: { type: 'success', message: n },
                                  },
                                }),
                              r && i({ type: 'danger', message: r }),
                              s && i({ type: 'danger', message: s.id }),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(1)),
                              i({ type: 'danger', message: e.t0.message });
                          case 16:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 13]]
                  );
                })
              ),
              [a, O, j]
            ),
            x = Object(u.jsx)(L.a, {
              enableReinitialize: !0,
              initialValues: g,
              validationSchema: Re,
              onSubmit: (function () {
                var e = Object(h.a)(
                  v.a.mark(function e(t, a) {
                    var n, r, s, c, o;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                '' === t.email && delete t.email,
                                (e.prev = 1),
                                (e.next = 4),
                                p(t).unwrap()
                              );
                            case 4:
                              (n = e.sent),
                                (r = n.supplier),
                                (s = n.error),
                                (c = n.invalidData),
                                a.setSubmitting(!1),
                                r &&
                                  ((o = {
                                    type: 'success',
                                    message: 'Supplier updated successfully',
                                  }),
                                  O.push({
                                    pathname: '/suppliers',
                                    state: { message: o },
                                  })),
                                s && i({ type: 'danger', message: s }),
                                c &&
                                  (a.setErrors(c),
                                  i({
                                    type: 'danger',
                                    message: 'Please correct the errors below',
                                  })),
                                (e.next = 17);
                              break;
                            case 14:
                              (e.prev = 14),
                                (e.t0 = e.catch(1)),
                                i({ type: 'danger', message: e.t0.message });
                            case 17:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 14]]
                    );
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })(),
              children: function (e) {
                return Object(u.jsx)(u.Fragment, {
                  children: l.isFetching
                    ? Object(u.jsx)(M, {})
                    : Object(u.jsxs)('form', {
                        onSubmit: e.handleSubmit,
                        children: [
                          Object(u.jsx)(_, {
                            name: 'name',
                            label: 'Name',
                            type: 'text',
                            placeholder: "Enter supplier's name",
                            required: !0,
                          }),
                          Object(u.jsx)(_, {
                            name: 'phone',
                            label: 'Phone',
                            type: 'text',
                            placeholder: "Enter supplier's phone number",
                            required: !0,
                          }),
                          Object(u.jsx)(_, {
                            name: 'email',
                            label: 'Email',
                            type: 'email',
                            placeholder: "Enter supplier's email",
                          }),
                          Object(u.jsx)('button', {
                            type: 'submit',
                            className: 'btn btn-primary rounded-0 me-2 mt-3',
                            disabled: e.isSubmitting,
                            children: e.isSubmitting
                              ? Object(u.jsx)(U, { text: 'Updating' })
                              : 'Update',
                          }),
                          Object(u.jsx)('button', {
                            type: 'button',
                            className: 'btn btn-danger rounded-0 mt-3',
                            'data-bs-toggle': 'modal',
                            'data-bs-target': '#deleteSupplier',
                            children: 'Delete',
                          }),
                        ],
                      }),
                });
              },
            });
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)(J, {
                title: 'Edit Supplier',
                message: c,
                setMessage: i,
                cardBody: x,
              }),
              Object(u.jsx)(T, {
                id: 'deleteSupplier',
                label: 'deleteSupplierLabel',
                title: 'Delete Supplier',
                body: 'Are you sure you want to delete this supplier? This action cannot be undone.',
                handleAction: f,
              }),
            ],
          });
        },
        He = f.injectEndpoints({
          endpoints: function (e) {
            return {
              getTransfers: e.query({
                query: function (e) {
                  return {
                    url: e && e.length ? '/transfers'.concat(e) : '/transfers',
                    validateStatus: function (e, t) {
                      return (
                        !!(null === t || void 0 === t ? void 0 : t.error) ||
                        e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return (null === e || void 0 === e ? void 0 : e.transfers)
                    ? ['Transfer'].concat(
                        Object(g.a)(
                          e.transfers.map(function (e) {
                            return { type: 'Transfer', id: e.id };
                          })
                        )
                      )
                    : ['Transfer'];
                },
              }),
              getTransfer: e.query({
                query: function (e) {
                  return {
                    url: '/transfers/'.concat(e),
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                providesTags: function (e, t, a) {
                  return [{ type: 'Transfer', id: a }];
                },
              }),
              addNewTransfer: e.mutation({
                query: function (e) {
                  return {
                    url: '/transfers',
                    method: 'POST',
                    body: e,
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Transfer'],
              }),
              destroyTransfer: e.mutation({
                query: function (e) {
                  return {
                    url: '/transfers/'.concat(e),
                    method: 'DELETE',
                    validateStatus: function (e, t) {
                      return (
                        !(
                          !(null === t || void 0 === t
                            ? void 0
                            : t.invalidData) &&
                          !(null === t || void 0 === t ? void 0 : t.error)
                        ) || e.ok
                      );
                    },
                  };
                },
                invalidatesTags: ['Transfer'],
              }),
            };
          },
        }),
        ze = He.useGetTransfersQuery,
        $e = (He.useGetTransferQuery, He.useAddNewTransferMutation),
        We = He.useDestroyTransferMutation,
        Je = function () {
          return Object(u.jsx)(_, {
            name: 'product',
            label: 'Product',
            type: 'search',
            placeholder: 'Enter product name',
            inline: !0,
            validation: !1,
          });
        },
        Ke = r.a.memo(function () {
          var e,
            t = Object(n.useState)(''),
            a = Object(d.a)(t, 2),
            r = a[0],
            s = a[1],
            c = Object(n.useState)(null),
            i = Object(d.a)(c, 2),
            o = i[0],
            l = i[1],
            b = ze(r),
            p = We(),
            m = Object(d.a)(p, 1)[0],
            j = Object(n.useMemo)(function () {
              return [
                {
                  name: 'Product',
                  accessor: 'product',
                  link: '/products/:productId',
                  callback: function (e) {
                    return e.name;
                  },
                },
                { name: 'Quantity', accessor: 'quantity' },
                { name: 'Source', accessor: 'source' },
                { name: 'Destination', accessor: 'destination' },
              ];
            }, []),
            g = b.isSuccess ? (b.data.transfers ? b.data.transfers : []) : null;
          Object(n.useEffect)(
            function () {
              var e;
              (null === (e = b.data) || void 0 === e ? void 0 : e.error) &&
                l({ type: 'danger', message: b.data.error });
            },
            [null === (e = b.data) || void 0 === e ? void 0 : e.error]
          );
          var O = Object(n.useCallback)(function (e) {
              e.length && s(e);
            }, []),
            f = Object(n.useCallback)(
              (function () {
                var e = Object(h.a)(
                  v.a.mark(function e(t) {
                    var a, n, r, s;
                    return v.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t.length) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (e.prev = 1), (e.next = 4), m(t.join()).unwrap()
                              );
                            case 4:
                              (a = e.sent),
                                (n = a.message),
                                (r = a.error),
                                (s = a.invalidData),
                                n && l({ type: 'success', message: n }),
                                r && l({ type: 'danger', message: r }),
                                s && l({ type: 'danger', message: s.id }),
                                (e.next = 16);
                              break;
                            case 13:
                              (e.prev = 13),
                                (e.t0 = e.catch(1)),
                                l({ type: 'danger', message: e.t0.message });
                            case 16:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 13]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [m]
            );
          return Object(u.jsx)(V, {
            cols: j,
            data: g,
            pagination:
              b.isSuccess && b.data.pagination
                ? b.data.pagination
                : { count: 0 },
            title: 'Transfers',
            message: o,
            setMessage: l,
            createItemLink: '/transfers/create',
            handleQuery: O,
            destroyChecked: f,
            searchFormInitialValues: { product: '' },
            SearchFormInputs: Je,
          });
        }),
        Ye = K.c({
          productId: K.d()
            .typeError('Product is required')
            .required('Product is required'),
          quantity: K.b()
            .typeError('Quantity is required')
            .required('Quantity is required')
            .positive('Quantity must be greater than 0')
            .integer('Quantity must be an integer'),
          source: K.a().oneOf(
            ['store', 'counter'],
            "Valid location are 'store' or 'counter'"
          ),
        }),
        Ze = function () {
          var e,
            t = Object(n.useState)(null),
            a = Object(d.a)(t, 2),
            r = a[0],
            s = a[1],
            c = $e(),
            i = Object(d.a)(c, 1)[0],
            l = te('?limit=all'),
            b = Object(n.useMemo)(
              function () {
                return l.isSuccess && l.data.products
                  ? l.data.products.map(function (e) {
                      return { value: e.id, label: e.name };
                    })
                  : [{ value: '', label: 'No results found' }];
              },
              [
                l.isSuccess,
                null === (e = l.data) || void 0 === e ? void 0 : e.products,
              ]
            ),
            p = Object(o.f)();
          Object(n.useEffect)(
            function () {
              (null === r || void 0 === r ? void 0 : r.type) &&
                (null === r || void 0 === r ? void 0 : r.message) &&
                window.scrollTo(0, 0);
            },
            [
              null === r || void 0 === r ? void 0 : r.type,
              null === r || void 0 === r ? void 0 : r.message,
            ]
          );
          var m = Object(u.jsx)(L.a, {
            initialValues: {
              productId: '',
              quantity: '',
              source: '',
              destination: '',
            },
            validationSchema: Ye,
            onSubmit: (function () {
              var e = Object(h.a)(
                v.a.mark(function e(t, a) {
                  var n, r, c, o, u, l;
                  return v.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = 'store' === t.source ? 'counter' : 'store'),
                              (t = Object(q.a)(
                                Object(q.a)({}, t),
                                {},
                                { destination: n }
                              )),
                              (e.prev = 2),
                              (e.next = 5),
                              i(t).unwrap()
                            );
                          case 5:
                            (r = e.sent),
                              (c = r.transfer),
                              (o = r.error),
                              (u = r.invalidData),
                              a.setSubmitting(!1),
                              c &&
                                ((l = {
                                  type: 'success',
                                  message: 'Transfer created successfully',
                                }),
                                p.push({
                                  pathname: '/transfers',
                                  state: { message: l },
                                })),
                              o && s({ type: 'danger', message: o }),
                              u &&
                                (a.setErrors(u),
                                s({
                                  type: 'danger',
                                  message: 'Please correct the errors below',
                                })),
                              (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(2)),
                              s({ type: 'danger', message: e.t0.message });
                          case 18:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 15]]
                  );
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            children: function (e) {
              return Object(u.jsx)(u.Fragment, {
                children: Object(u.jsxs)('form', {
                  onSubmit: e.handleSubmit,
                  children: [
                    Object(u.jsx)(H, {
                      name: 'productId',
                      label: 'Select product',
                      options: b,
                      required: !0,
                      children: Object(u.jsx)('option', {
                        value: '',
                        children: 'Select a product',
                      }),
                    }),
                    Object(u.jsx)(_, {
                      name: 'quantity',
                      label: 'Quantity',
                      type: 'number',
                      placeholder: 'Enter quantity',
                      required: !0,
                    }),
                    Object(u.jsxs)(H, {
                      name: 'source',
                      label: 'Select source location',
                      required: !0,
                      children: [
                        Object(u.jsx)('option', {
                          value: '',
                          children: 'Select source location',
                        }),
                        Object(u.jsx)('option', {
                          value: 'store',
                          children: 'Store',
                        }),
                        Object(u.jsx)('option', {
                          value: 'counter',
                          children: 'Counter',
                        }),
                      ],
                    }),
                    Object(u.jsx)('button', {
                      type: 'submit',
                      className: 'btn btn-primary rounded-0 me-2 mt-3',
                      disabled: e.isSubmitting,
                      children: e.isSubmitting
                        ? Object(u.jsx)(U, { text: 'Adding' })
                        : 'Add',
                    }),
                  ],
                }),
              });
            },
          });
          return Object(u.jsx)(J, {
            title: 'Add Transfer',
            message: r,
            setMessage: s,
            cardBody: m,
          });
        };
      var Xe = function () {
          return Object(u.jsxs)(u.Fragment, {
            children: [
              Object(u.jsx)('div', {
                className: 'min-vh-100',
                children: Object(u.jsxs)(i.a, {
                  children: [
                    Object(u.jsx)(l, {}),
                    Object(u.jsx)(b, {}),
                    Object(u.jsxs)(o.c, {
                      children: [
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/',
                          component: m,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/categories',
                          component: W,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/categories/create',
                          component: Z,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/categories/:categoryId',
                          component: X,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/products',
                          component: ie,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/products/create',
                          component: ue,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/products/:productId',
                          component: le,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/purchases',
                          component: ge,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/purchases/create',
                          component: we,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/purchases/:purchaseId',
                          component: qe,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/sales',
                          component: Ae,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/sales/create',
                          component: Ue,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/sales/:saleId',
                          component: Qe,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/suppliers',
                          component: Be,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/suppliers/create',
                          component: Ge,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/suppliers/:supplierId',
                          component: _e,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/transfers',
                          component: Ke,
                        }),
                        Object(u.jsx)(o.a, {
                          exact: !0,
                          path: '/transfers/create',
                          component: Ze,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(u.jsx)(p, {}),
            ],
          });
        },
        et = a(45),
        tt = a(4),
        at = Object(tt.configureStore)({
          reducer: Object(et.a)({}, f.reducerPath, f.reducer),
          middleware: function (e) {
            return e().concat(f.middleware);
          },
        }),
        nt = a(29);
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(
        Object(u.jsx)(r.a.StrictMode, {
          children: Object(u.jsx)(nt.Provider, {
            store: at,
            children: Object(u.jsx)(Xe, {}),
          }),
        }),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    98: function (e, t, a) {},
  },
  [[229, 1, 2]],
]);
//# sourceMappingURL=main.fb272c70.chunk.js.map
