'use client';

import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import styles from './CVForm.module.css';

export default function Family() {
    const { register, control, watch } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'family',
    });

    const hasRelativeInTaiwan = watch('hasRelativeInTaiwan');

    return (
        <div>
            <h3 className={styles.sectionHeader} style={{ fontSize: '16px', borderBottom: 'none', marginBottom: '10px' }}>Thành Viên Gia Đình</h3>
            {fields.map((field, index) => (
                <div key={field.id} className={styles.card}>
                    <button type="button" onClick={() => remove(index)} className={styles.removeBtn} title="Xóa">
                        &times;
                    </button>
                    <div className={styles.grid2}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Họ tên</label>
                            <input {...register(`family.${index}.name`)} className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Quan Hệ</label>
                            <input {...register(`family.${index}.relationship`)} className={styles.input} />
                        </div>
                    </div>
                    <div className={styles.grid2}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Năm Sinh</label>
                            <input {...register(`family.${index}.birthYear`)} className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Nghề Nghiệp</label>
                            <input {...register(`family.${index}.job`)} className={styles.input} />
                        </div>
                    </div>
                </div>
            ))}
            <button type="button" onClick={() => append({})} className={styles.addBtn}>
                + Thêm thành viên
            </button>

            <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <h3 className={styles.sectionHeader} style={{ fontSize: '16px', borderBottom: 'none' }}>Người Thân Tại Đài Loan</h3>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Có người thân bên Đài Loan không?</label>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <input type="radio" value="yes" {...register('hasRelativeInTaiwan')} /> Có
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <input type="radio" value="no" {...register('hasRelativeInTaiwan')} /> Không
                        </label>
                    </div>
                </div>

                {hasRelativeInTaiwan === 'yes' && (
                    <div className={styles.card} style={{ backgroundColor: '#fff', border: '1px solid #ddd' }}>
                        <div className={styles.grid2}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Họ Tên Người Thân</label>
                                <input {...register('relativeName')} className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Mối Quan Hệ</label>
                                <input {...register('relativeRelationship')} className={styles.input} />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Visa hiện tại</label>
                            <input {...register('relativeVisa')} className={styles.input} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
